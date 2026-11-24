import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { SectorSchema, TileModel } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors, selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Size } from '../../core/models/math/size.interface';
import { Vector } from '../../core/models/math/vector.model';
import { SectorTriangulationMeshModel, SectorTriangulationMeshPartsModel, TileRequestModel } from '../../core/models/api/api.models';
import { BehaviorSubject } from 'rxjs';
import { MosaicGenerationHub } from './mosaic-generation-hub';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicGenerationState } from './mosaic-generation-state';
import { MosaicHierarchyComponent } from './mosaic-hierarchy/mosaic-hierarchy.component';
import { ProgressInfoComponent } from './progress-info/progress-info.component';
import { InfoState } from './progress-info/progress-info.interface';
import { GeneratedTileModel } from './mosaic-generation.interface';
import { transformPolygon } from '../../core/helpers/polygon/trigonometry-helper';
import { CanvasObject } from '../../../../../active-canvas/src/public-api';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { TileObject } from '../../shared/canvas-objects/tile-object';
import { ClosedContourObject } from '../../shared/canvas-objects/closed-contour-object';
import { TriangulatedContourObject } from '../../shared/canvas-objects/triangulated-contour-object';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { RibbonAction } from '../ribbon/ribbon-action.interface';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { CanvasToolkit } from '../canvas-toolkit';

@Component({
    selector: 'app-mosaic-generation',
    imports: [MosaicHierarchyComponent, ProgressInfoComponent],
    providers: [MosaicGenerationState],
    templateUrl: './mosaic-generation.component.html',
    styleUrl: './mosaic-generation.component.scss',
})
export class MosaicGenerationComponent implements OnInit, ToolView {
    private readonly canvasToolkit = inject(CanvasToolkit);

    protected readonly isImageVisible = signal<boolean>(false);

    protected readonly isMeshVisible = signal<boolean>(true);

    private readonly showMesh$ = new BehaviorSubject<boolean>(true);

    protected readonly progressState = signal<InfoState | null>(null);

    private imageObject?: ImageObject;

    private availableTiles!: TileModel[];

    protected readonly ribbonActions: RibbonAction[] = [
        {
            iconName: 'crop',
            visibility: signal('on'),
            tooltipKey: 'tool.ribbon.takeSnapshot',
            onClick: () => this.canvasToolkit.openTakeSnapshotDialog(this.activeCanvas, 'generating_snapshot.png'),
        },
        {
            iconName: 'recenter',
            visibility: signal('on'),
            tooltipKey: 'tool.ribbon.focusOnImage',
            onClick: () => {
                this.focusOnImage();
                this.activeCanvas.redraw();
            },
        },
        {
            iconName: 'graph_3',
            tooltipKey: 'tool.ribbon.toggleMeshVisibility',
            onClick: () => this.toggleMeshVisibility(),
            visibility: computed(() => (this.isMeshVisible() ? 'on' : 'off')),
        },
        {
            iconName: 'image',
            tooltipKey: 'tool.ribbon.toggleImageVisibility',
            onClick: () => this.toggleImageVisibility(),
            visibility: computed(() => (this.isImageVisible() ? 'on' : 'off')),
        },
    ];

    private activeCanvas!: IActiveCanvas;

    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly destroyRef = inject(DestroyRef);

    private readonly snackBar = inject(MatSnackBar);

    private readonly generationHub = inject(MosaicGenerationHub);

    private readonly generationState = inject(MosaicGenerationState);

    public ngOnInit(): void {
        this.subscribeOnGenerationProgress();
        this.subscribeOnSectorsMeshReceived();
        this.subscribeOnMeshGenerationFinished();
        this.subscribeOnMeshVisibilityChange();
        this.destroyRef.onDestroy(() => this.generationHub.stopConnection());
    }

    private async onCanvasReady(shouldFocusOnObject: boolean): Promise<void> {
        const mosaicConfig = this.store.selectSignal(selectMosaicConfig)()!;

        this.imageObject = await CanvasToolkit.createImageObject(mosaicConfig);
        this.imageObject.setVisibility(this.isImageVisible());
        this.activeCanvas.addCanvasObject(this.imageObject);
        if (shouldFocusOnObject) {
            this.focusOnImage();
        }

        this.activeCanvas.redraw();

        this.initSectors();
        this.initGeneration(mosaicConfig.base64Image, this.imageObject.size);
    }

    private initGeneration(base64Image: string, imageSize: Size): void {
        this.generationHub
            .startConnection()
            .then(() => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();

                const initMosaicGenerationRequest = this.generationState.buildInitMosaicRequest(base64Image, imageSize, sectorsSchemas);

                this.availableTiles = this.getAvailableTiles();

                this.progressState.set({ type: 'init', message: this.translate.instant('tool.generation.message.sectorsMeshGeneration') });

                this.generationHub
                    .initMosaicTriangulation(initMosaicGenerationRequest)
                    .catch(() => this.setError(this.translate.instant('tool.generation.message.errorOnSectorsMeshGeneration')));
            })
            .catch(() => this.setError(this.translate.instant('tool.generation.message.errorOnServerConnection')));
    }

    private subscribeOnGenerationProgress(): void {
        this.generationHub.sectionGenerated$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((sectionGenerationResult) => {
            const sectionTileObjects: GeneratedTileModel[] = [];

            for (const tileTransform of sectionGenerationResult.tilesTransforms) {
                const tile: TileModel = this.availableTiles.find((t) => t.id === tileTransform.tileId)!;
                const worldTileVertices: Vector[] = transformPolygon(tile.vertices, tileTransform.position, tileTransform.angle);
                const tileObject: TileObject = new TileObject(worldTileVertices, tile.color);
                this.activeCanvas.addCanvasObject(tileObject);
                sectionTileObjects.push({ tileObject, tileTransform });
            }

            const sectorInfo = this.generationState.getSectorById(sectionGenerationResult.sectorId);
            this.generationState.addSectionTilesObjects(sectionGenerationResult.sectorId, sectionTileObjects);

            this.progressState.set({
                type: 'progress',
                sector: sectorInfo.schema.name,
                percent: Math.floor((sectorInfo.sections.length / sectorInfo.countOfSections) * 100),
            });

            this.activeCanvas.redraw();
        });
    }

    private subscribeOnSectorsMeshReceived(): void {
        this.generationHub.sectionsMeshReceived$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((sectorsTriangulations: SectorTriangulationMeshPartsModel[]) => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();
                this.createSectorsMeshCanvasObjects(sectorsTriangulations, sectorsSchemas);
                this.generationState.fillSectorsGenerationInfo(sectorsTriangulations);

                const tiles: TileRequestModel[] = this.availableTiles.map((tile) => ({
                    color: tile.color,
                    id: tile.id,
                    vertices: tile.vertices,
                }));

                this.generationHub
                    .startLongRunningTask(tiles)
                    .catch(() => this.showMessage(this.translate.instant('tool.generation.message.errorOnStartingMosaicGeneration')));
            });
    }

    private subscribeOnMeshGenerationFinished(): void {
        this.generationHub.generationFinished$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.progressState.set(null);
            this.showMessage(this.translate.instant('tool.generation.message.generationCompleted'));
        });
    }

    private subscribeOnMeshVisibilityChange(): void {
        this.showMesh$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((shouldShowMesh) => {
            for (const sector of this.generationState.getSectors()) {
                sector.setSectorMeshVisibility(shouldShowMesh);
            }

            this.activeCanvas.redraw();
        });
    }

    private createSectorsMeshCanvasObjects(sectorsTriangulations: SectorTriangulationMeshPartsModel[], sectors: SectorSchema[]): void {
        for (let i = 0; i < sectors.length; ++i) {
            const sectorSchema: SectorSchema = sectors[i];
            const sectorInfo = this.generationState.getSectorById(sectorSchema.id);
            const sectorPartsCanvasObjects: CanvasObject[] = [];

            for (const sectorPart of sectorsTriangulations[i].parts) {
                const canvasObject = this.createSectorMeshObject(sectorSchema, sectorPart, i);
                this.activeCanvas.addCanvasObject(canvasObject);
                sectorPartsCanvasObjects.push(canvasObject);
            }

            sectorInfo.setSectorVisualObjects(sectorPartsCanvasObjects);
        }

        this.activeCanvas.redraw();
    }

    private initSectors(): void {
        const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();
        this.generationState.initGeneratedSectorsData(sectorsSchemas);
        this.initSectorsMeshes(sectorsSchemas);
    }

    private initSectorsMeshes(sectorsSchemas: SectorSchema[]): void {
        for (let i = 0; i < sectorsSchemas.length; ++i) {
            const sectorInfo = this.generationState.getSectorById(sectorsSchemas[i].id);
            const canvasObject = this.createSectorContourObject(sectorsSchemas[i], i);
            this.activeCanvas.addCanvasObject(canvasObject);
            sectorInfo.visualObjects.push(canvasObject);
        }

        this.activeCanvas.redraw();
    }

    private createSectorMeshObject(sectorSchema: SectorSchema, sectorPart: SectorTriangulationMeshModel, index: number): TriangulatedContourObject {
        return new TriangulatedContourObject(sectorPart.triangles, sectorPart.contour, sectorSchema.color, 10 + index);
    }

    private createSectorContourObject(sectorSchema: SectorSchema, index: number): ClosedContourObject {
        return new ClosedContourObject([...sectorSchema.vertices], sectorSchema.color, 10 + index);
    }

    private getAvailableTiles(): TileModel[] {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        return tilesSets.flatMap((x) => x.tiles);
    }

    protected toggleMeshVisibility(): void {
        const isVisible = !this.isMeshVisible();
        this.showMesh$.next(isVisible);
        this.isMeshVisible.set(isVisible);
    }

    protected toggleImageVisibility(): void {
        const isVisible = !this.isImageVisible();
        this.imageObject!.setVisibility(isVisible);
        this.activeCanvas.redraw();
        this.isImageVisible.set(isVisible);
    }

    private setError(message: string): void {
        this.progressState.set(null);
        this.showMessage(message);
    }

    private showMessage(message: string): void {
        this.snackBar.open(message, this.translate.instant('common.ok'), { duration: 3000 });
    }

    public sectionEntered(activeCanvas: IActiveCanvas, shouldFocusOnObject: boolean): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;

        this.onCanvasReady(shouldFocusOnObject);

        return { ribbon: this.ribbonActions };
    }

    private focusOnImage(): void {
        const zoom = CanvasToolkit.calculateZoomForImage(this.imageObject!.size, this.activeCanvas.viewport());
        this.activeCanvas.setViewport(zoom, Vector.zero);
    }
}
