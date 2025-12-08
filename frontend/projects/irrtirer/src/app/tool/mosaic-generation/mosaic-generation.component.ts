import { AfterViewInit, ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { MosaicConfig, SectorSchema, TileModel } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors, selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Size } from '../../core/models/math/size.interface';
import { Vector } from '../../core/models/math/vector.model';
import { SectorTriangulationMeshModel, SectorTriangulationMeshPartsModel, TileRequestModel } from '../../core/models/api/api.models';
import { BehaviorSubject } from 'rxjs';
import { MosaicSignalRService } from './mosaic-signal-r.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicGenerationService } from './mosaic-generation.service';
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
import { ToolService } from '../tool.service';

@Component({
    selector: 'app-mosaic-generation',
    imports: [
        MosaicHierarchyComponent,
        ProgressInfoComponent
    ],
    providers: [MosaicGenerationService],
    templateUrl: './mosaic-generation.component.html',
    styleUrl: './mosaic-generation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicGenerationComponent implements AfterViewInit, OnDestroy, ToolView {
    protected readonly isImageVisible = signal<boolean>(false);

    protected readonly isMeshVisible = signal<boolean>(true);

    private readonly showMesh$ = new BehaviorSubject<boolean>(true);

    protected readonly progressState = signal<InfoState | null>(null);

    private imageObject?: ImageObject;

    private availableTiles: TileModel[];

    protected readonly ribbonActions: RibbonAction[] = [
        {
            iconName: 'recenter',
            visibility: signal('on'),
            onClick: () => {
                this.focusOnImage();
                this.activeCanvas.redraw();
            } 
        },
        {
            iconName: 'graph_3',
            onClick: () => this.toggleMeshVisibility(),
            visibility: computed(() =>  this.isMeshVisible() ? 'on' : 'off'),
        },
        {
            iconName: 'image',
            onClick: () => this.toggleImageVisibility(),
            visibility: computed(() => this.isImageVisible() ? 'on' : 'off'), 
        }
    ];

    private activeCanvas: IActiveCanvas;

    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly destroyRef = inject(DestroyRef);

    private readonly snackBar = inject(MatSnackBar);

    private readonly signalRService = inject(MosaicSignalRService);

    private readonly service = inject(MosaicGenerationService);

    private shouldInitiallyFocusOnObject: boolean = false;

    public async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();

        this.imageObject = await ToolService.createImageObject(mosaicConfig);
        this.imageObject.setVisibility(this.isImageVisible());
        this.activeCanvas.addCanvasObject(this.imageObject);
        if (this.shouldInitiallyFocusOnObject) {
            this.focusOnImage();
        }

        this.activeCanvas.redraw();

        this.subscribeOnGenerationProgress();
        this.subscribeOnSectorsMeshReceived();
        this.subscribeOnMeshGenerationFinished();
        this.subscribeOnMeshVisibilityChange();

        this.initSectors();
        this.initGeneration(mosaicConfig.base64Image, this.imageObject.size);
    }

    private initGeneration(base64Image: string, imageSize: Size): void {
        this.signalRService
            .startConnection()
            .then(() => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();

                const initMosaicGenerationRequest = this.service.buildInitMosaicRequest(base64Image, imageSize, sectorsSchemas);

                this.availableTiles = this.getAvailableTiles();

                this.progressState.set({ type: 'init', message: this.translate.instant('tool.generation.message.sectorsMeshGeneration') });

                this.signalRService
                    .initMosaicTriangulation(initMosaicGenerationRequest)
                    .catch(() => this.setError(this.translate.instant('tool.generation.message.errorOnSectorsMeshGeneration')));
            })
            .catch(() => this.setError(this.translate.instant('tool.generation.message.errorOnServerConnection')));
    }

    private subscribeOnGenerationProgress(): void {
        this.signalRService.sectionGenerated$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((sectionGenerationResult) => {
                const sectionTileObjects: GeneratedTileModel[] = [];

                for (const tileTransform of sectionGenerationResult.tilesTransforms) {
                    const tile: TileModel = this.availableTiles.find((t) => t.id === tileTransform.tileId);
                    const worldTileVertices: Vector[] = transformPolygon(tile.vertices, tileTransform.position, tileTransform.angle);
                    const tileObject: TileObject = new TileObject(worldTileVertices, tile.color);
                    this.activeCanvas.addCanvasObject(tileObject);
                    sectionTileObjects.push({ tileObject, tileTransform });
                }

                const sectorInfo = this.service.getSectorById(sectionGenerationResult.sectorId);
                this.service.addSectionTilesObjects(sectionGenerationResult.sectorId, sectionTileObjects);

                this.progressState.set({
                    type: 'progress',
                    sector: sectorInfo.schema.name,
                    percent: Math.floor((sectorInfo.sections.length / sectorInfo.countOfSections) * 100),
                });

                this.activeCanvas.redraw();
            });
    }

    private subscribeOnSectorsMeshReceived(): void {
       this.signalRService.sectionsMeshReceived$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((sectorsTriangulations: SectorTriangulationMeshPartsModel[]) => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();
                this.createSectorsMeshCanvasObjects(sectorsTriangulations, sectorsSchemas);
                this.service.fillSectorsGenerationInfo(sectorsTriangulations);

                const tiles: TileRequestModel[] = this.availableTiles.map((tile) => ({
                    color: tile.color,
                    id: tile.id,
                    vertices: tile.vertices,
                }));

                this.signalRService
                    .startLongRunningTask(tiles)
                    .catch(() => this.showMessage(this.translate.instant('tool.generation.message.errorOnStartingMosaicGeneration')));
            });
    }

    private subscribeOnMeshGenerationFinished(): void {
        this.signalRService.generationFinished$
            .pipe(takeUntilDestroyed(this.destroyRef))    
            .subscribe(() => {
                this.progressState.set(null);
                this.showMessage(this.translate.instant('tool.generation.message.generationCompleted'));
            });
    }

    private subscribeOnMeshVisibilityChange(): void {
        this.showMesh$
            .pipe(takeUntilDestroyed(this.destroyRef))    
            .subscribe((shouldShowMesh) => {
                for (const sector of this.service.getSectors()) {
                    sector.setSectorMeshVisibility(shouldShowMesh);
                }

                this.activeCanvas.redraw();
            });
    }

    public ngOnDestroy(): void {
        this.signalRService.stopConnection();
    }

    private createSectorsMeshCanvasObjects(sectorsTriangulations: SectorTriangulationMeshPartsModel[], sectors: SectorSchema[]): void {
        for (let i = 0; i < sectors.length; ++i) {
            const sectorSchema: SectorSchema = sectors[i];
            const sectorInfo = this.service.getSectorById(sectorSchema.id);
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
        this.service.initGeneratedSectorsData(sectorsSchemas);
        this.initSectorsMeshes(sectorsSchemas);
    }

    private initSectorsMeshes(sectorsSchemas: SectorSchema[]): void {
        for (let i = 0; i < sectorsSchemas.length; ++i) {
            const sectorInfo = this.service.getSectorById(sectorsSchemas[i].id);
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
        this.imageObject.setVisibility(isVisible);
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
        this.shouldInitiallyFocusOnObject = shouldFocusOnObject;
        return { ribbon: this.ribbonActions };
    }

    private focusOnImage(): void {
        const zoom = ToolService.calculateZoomForImage(this.imageObject.size, this.activeCanvas.viewport);
        this.activeCanvas.setViewport(zoom, Vector.zero);
    }
}
