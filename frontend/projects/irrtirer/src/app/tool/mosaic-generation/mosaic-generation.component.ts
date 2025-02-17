import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, signal, ViewChild, WritableSignal } from '@angular/core';
import { MosaicConfig, SectorSchema, TileModel } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors, selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Size } from '../../core/models/math/size.interface';
import { Vector } from '../../core/models/math/vector.model';
import { SectorTriangulationMeshModel, SectorTriangulationMeshPartsModel, TileRequestModel } from '../../core/models/api/api.models';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ImageHelper } from '../../core/helpers/image-helper';
import { MatButtonModule } from '@angular/material/button';
import { MosaicSignalRService } from './mosaic-signal-r.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicGenerationService } from './mosaic-generation.service';
import { MatIconModule } from '@angular/material/icon';
import { MosaicHierarchyComponent } from './mosaic-hierarchy/mosaic-hierarchy.component';
import { ProgressInfoComponent } from './progress-info/progress-info.component';
import { InfoState } from './progress-info/progress-info.interface';
import { GeneratedTileModel } from './mosaic-generation.interface';
import { transformPolygon } from '../../core/helpers/polygon/trigonometry-helper';
import { ActiveCanvasComponent, CanvasObject } from '../../../../../active-canvas/src/public-api';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { TileObject } from '../../shared/canvas-objects/tile-object';
import { ClosedContourObject } from '../../shared/canvas-objects/closed-contour-object';
import { TriangulatedContourObject } from '../../shared/canvas-objects/triangulated-contour-object';

@Component({
    selector: 'app-mosaic-generation',
    imports: [
        ActiveCanvasComponent,
        MatProgressSpinnerModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MosaicHierarchyComponent,
        ProgressInfoComponent,
    ],
    providers: [MosaicGenerationService],
    templateUrl: './mosaic-generation.component.html',
    styleUrl: './mosaic-generation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicGenerationComponent implements AfterViewInit, OnDestroy {
    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    protected isImageVisibleSignal: WritableSignal<boolean> = signal<boolean>(true);

    protected isMeshVisibleSignal: WritableSignal<boolean> = signal<boolean>(true);

    private showMesh$: BehaviorSubject<boolean> = new BehaviorSubject(true);

    protected progressStateSignal: WritableSignal<InfoState> = signal(null);

    private imageCanvasObject: ImageObject;

    private avalibleTiles: TileModel[];

    private subscription: Subscription = new Subscription();

    constructor(
        private store: Store,
        private service: MosaicGenerationService,
        private signalRService: MosaicSignalRService,
        private snackbarService: MatSnackBar
    ) {}

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = await ImageHelper.getImageObjectBySrc(mosaicConfig.base64Image);

        const mosaicSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        this.imageCanvasObject = new ImageObject(image, Vector.zero, mosaicSize);
        this.activeCanvas.addCanvasObject(this.imageCanvasObject);

        this.setInitZoomForImage(mosaicSize);
        this.activeCanvas.rewrite();

        this.subscribeOnGenerationProgress();
        this.subscribeOnSectorsMeshRecived();
        this.subscribeOnMeshGenerationFinished();
        this.subscribeOnMeshVisibilityChange();

        this.initGeneration(mosaicConfig.base64Image, mosaicSize);
    }

    private initGeneration(base64Image: string, imageSize: Size): void {
        this.signalRService
            .startConnection()
            .then(() => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();
                this.service.initGeneratedSectorsData(sectorsSchemas);
                this.initSectors(sectorsSchemas);

                const initMosaicGenerationRequest = this.service.buildInitMosaicRequest(base64Image, imageSize, sectorsSchemas);

                this.avalibleTiles = this.getAvalibleTiles();

                this.progressStateSignal.set({ type: 'init', message: $localize`Generowanie siatki sektorów` });

                this.signalRService
                    .initMosaicTriangulation(initMosaicGenerationRequest)
                    .catch(() => this.setError($localize`Wystąpił błąd na etapie generowania siatki sektorów.`));
            })
            .catch(() => this.setError($localize`Wystąpił błąd na etapie połączenia z serwerem.`));
    }

    private subscribeOnGenerationProgress(): void {
        this.subscription.add(
            this.signalRService.sectionGenerated$.subscribe((sectionGenerationResult) => {
                const sectionTileObjects: GeneratedTileModel[] = [];

                for (const tileTransform of sectionGenerationResult.tilesTransforms) {
                    const tile: TileModel = this.avalibleTiles.find((t) => t.id === tileTransform.tileId);
                    const worldTileVertices: Vector[] = transformPolygon(tile.vertices, tileTransform.position, tileTransform.angle);
                    const tileObject: TileObject = new TileObject(worldTileVertices, tile.color);
                    this.activeCanvas.addCanvasObject(tileObject);
                    sectionTileObjects.push({ tileObject, tileTransform });
                }

                const sectorInfo = this.service.getSectorById(sectionGenerationResult.sectorId);
                this.service.addSectionTilesObjects(sectionGenerationResult.sectorId, sectionTileObjects);

                this.progressStateSignal.set({
                    type: 'progress',
                    sector: sectorInfo.schema.name,
                    percent: Math.floor((sectorInfo.sections.length / sectorInfo.countOfSections) * 100),
                });

                this.activeCanvas.rewrite();
            })
        );
    }

    private subscribeOnSectorsMeshRecived(): void {
        this.subscription.add(
            this.signalRService.sectionsMeshReceived$.subscribe((sectorsTriangulations: SectorTriangulationMeshPartsModel[]) => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();
                this.createSectorsMeshCanvasObjects(sectorsTriangulations, sectorsSchemas);
                this.service.fillSectorsGenerationInfo(sectorsTriangulations);

                const tiles: TileRequestModel[] = this.avalibleTiles.map((tile) => ({
                    color: tile.color,
                    id: tile.id,
                    vertices: tile.vertices,
                }));

                this.signalRService
                    .startLongRunningTask(tiles)
                    .catch(() => this.showMessage($localize`Wystąpił błąd na etapie rozpoczęcia generowania.`));
            })
        );
    }

    private subscribeOnMeshGenerationFinished(): void {
        this.subscription.add(
            this.signalRService.generationFinished$.subscribe(() => {
                this.progressStateSignal.set(null);
                this.showMessage($localize`Ukończono generowanie mozaiki`);
            })
        );
    }

    private subscribeOnMeshVisibilityChange(): void {
        this.subscription.add(
            this.showMesh$.subscribe((shouldShowMesh) => {
                for (const sector of this.service.getSectors()) {
                    sector.setSectorMeshVisability(shouldShowMesh);
                }

                this.activeCanvas.rewrite();
            })
        );
    }

    ngOnDestroy(): void {
        this.signalRService.stopConnection();
        this.subscription.unsubscribe();
    }

    private setInitZoomForImage(imageSize: Size): void {
        const imageZoom: Size = {
            height: (imageSize.height * 1.1) / this.activeCanvas.viewport.cmSize.height,
            width: (imageSize.width * 1.1) / this.activeCanvas.viewport.cmSize.width,
        };

        const zoom: number = Math.max(imageZoom.height, imageZoom.width);
        this.activeCanvas.setZoom(zoom);
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

        this.activeCanvas.rewrite();
    }

    private initSectors(sectorsSchemas: SectorSchema[]): void {
        for (let i = 0; i < sectorsSchemas.length; ++i) {
            const sectorInfo = this.service.getSectorById(sectorsSchemas[i].id);
            const canvasObject = this.createSectorContourObject(sectorsSchemas[i], i);
            this.activeCanvas.addCanvasObject(canvasObject);
            sectorInfo.visualObjects.push(canvasObject);
        }

        this.activeCanvas.rewrite();
    }

    private createSectorMeshObject(sectorSchema: SectorSchema, sectorPart: SectorTriangulationMeshModel, index: number): TriangulatedContourObject {
        return new TriangulatedContourObject(sectorPart.triangles, sectorPart.contour, sectorSchema.color, 10 + index);
    }

    private createSectorContourObject(sectorSchema: SectorSchema, index: number): ClosedContourObject {
        return new ClosedContourObject([...sectorSchema.vertices], sectorSchema.color, 10 + index);
    }

    private getAvalibleTiles(): TileModel[] {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        return tilesSets.flatMap((x) => x.tiles);
    }

    protected toogleMeshVisibility(): void {
        const isVisible = !this.isMeshVisibleSignal();
        this.showMesh$.next(isVisible);
        this.isMeshVisibleSignal.set(isVisible);
    }

    protected toogleImageVisibility(): void {
        const isVisible = !this.isImageVisibleSignal();
        this.imageCanvasObject.isVisible = isVisible;
        this.activeCanvas.rewrite();
        this.isImageVisibleSignal.set(isVisible);
    }

    private setError(message: string): void {
        this.progressStateSignal.set(null);
        this.showMessage(message);
    }

    private showMessage(message: string): void {
        this.snackbarService.open(message, 'Ok', { duration: 3000 });
    }
}
