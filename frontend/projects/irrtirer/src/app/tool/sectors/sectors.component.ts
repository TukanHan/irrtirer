import { AfterViewInit, Component, DestroyRef, OnInit, signal, Signal, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Vector } from '../../core/models/math/vector.model';
import { MosaicConfig, SectorSchema } from '../../core/models/mosaic-project.model';
import { first } from 'rxjs';
import { SectorsContoursService } from './sectors-contours.service';
import { SectorContourEditionComponent } from './sector-contour-edition/sector-contour-edition.component';
import { EditedSectorContour, EditedSectorWithTriangulationMesh } from './sectors-contours.interfaces';
import { SectorsContoursListComponent } from './sectors-contours-list/sectors-contours-list.component';
import { ArrayHelpers } from '../../core/helpers/array-helpers';
import { SectorPropertyEditorComponent } from './sector-property-editor/sector-property-editor.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { CanvasObject, IVector } from '../../../../../active-canvas/src/public-api';
import { OpenedContourObject } from '../../shared/canvas-objects/opened-contour-object';
import { TriangulatedContourObject } from '../../shared/canvas-objects/triangulated-contour-object';
import { ClosedContourObject } from '../../shared/canvas-objects/closed-contour-object';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { ToolService } from '../tool.service';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { RibbonAction } from '../ribbon/ribbon-action.interface';

@Component({
    selector: 'app-sectors',
    imports: [
        SectorsContoursListComponent,
        SectorContourEditionComponent,
        SectorPropertyEditorComponent,
    ],
    templateUrl: './sectors.component.html',
    styleUrl: './sectors.component.scss'
})
export class SectorsComponent implements OnInit, AfterViewInit, ToolView {
    private activeCanvas: IActiveCanvas;

    @ViewChild('sectorContourEditionPanel')
    protected sectorContourEditionPanel: SectorContourEditionComponent;

    private visualElements: CanvasObject[] = [];

    protected sectorForContourEditionSignal: Signal<EditedSectorContour>;

    protected sectorForPropertyEditionSignal: Signal<EditedSectorWithTriangulationMesh>;

    private imageObject: ImageObject;

    protected ribbonActions: RibbonAction[] = [
        {
            iconName: 'recenter',
            visibility: signal('on'),
            onClick: () => {
                this.focusOnImage();
                this.activeCanvas.redraw();
            } 
        }
    ];

    constructor(
        private store: Store,
        private service: SectorsContoursService,
        private destroyRef: DestroyRef
    ) {
        this.sectorForContourEditionSignal = toSignal(this.service.sectorForContourEdition$);
        this.sectorForPropertyEditionSignal = toSignal(this.service.sectorForPropertyEdition$);
    }

    public ngOnInit(): void {
        this.service.emitEditedSectorContour(null);
        this.service.emitEditedSectorProperty(null);
    }

    public async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();

        this.imageObject = await ToolService.createImageObject(mosaicConfig);
        this.activeCanvas.addCanvasObject(this.imageObject);

        this.subscribeOnEditedSectorChange();
        this.subscribeOnEditedSectorPropertiesChange();
        this.subscribeOnSectorListChange();
        this.activeCanvas.redraw();

        this.activeCanvas.clicked
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((click) => this.onCanvasClicked(click));
    }

    private subscribeOnEditedSectorChange(): void {
        this.service.sectorForContourEdition$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((s) => this.onEditedSectorChanged(s));
    }

    private subscribeOnEditedSectorPropertiesChange(): void {
        this.service.sectorForPropertyEdition$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.redrawSectors());
    }

    private subscribeOnSectorListChange(): void {
        this.service.sectorListChange$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.redrawSectors());
    }

    private onCanvasClicked(point: IVector): void {
        const selectedSector: EditedSectorContour = this.sectorForContourEditionSignal();
        if (selectedSector) {
            this.sectorContourEditionPanel.addVertex(new Vector(point.x, point.y));
        }
    }

    private onEditedSectorChanged(sector: EditedSectorContour): void {
        this.activeCanvas.options = {
            isMovable: !sector,
        };

        this.redrawSectors();
    }

    private redrawSectors(): void {
        this.visualElements.forEach(visualElem => visualElem.removeObject());
        this.visualElements = this.prepareSectorsContours();

        for (const object of this.visualElements) {
            this.activeCanvas.addCanvasObject(object);
        } 

        this.activeCanvas.redraw();
    }

    private prepareSectorsContours(): CanvasObject[] {
        const editedSectorContour: EditedSectorContour = this.sectorForContourEditionSignal();
        const sectorWithTriangulationMesh: EditedSectorWithTriangulationMesh = this.sectorForPropertyEditionSignal();
        let selectedSectorOnList: SectorSchema;

        let sectors: SectorSchema[] = this.store.selectSignal(selectSectors)();
        if (editedSectorContour) {
            sectors = ArrayHelpers.addOrUpdate(
                [...sectors],
                editedSectorContour.sector,
                (x) => x.id === editedSectorContour.sector.id
            );
        } else {
            this.service.sectorListChange$
                .pipe(first())
                .subscribe((event) => {
                    selectedSectorOnList = event?.selectedSector;
                });
        }

        return this.mapSectorsToContours(sectors, editedSectorContour, sectorWithTriangulationMesh, selectedSectorOnList);
    }

    private mapSectorsToContours(
        sectors: SectorSchema[],
        editedSector: EditedSectorContour,
        sectorWithTriangulationMesh: EditedSectorWithTriangulationMesh,
        selectedSectorOnList: SectorSchema
    ): CanvasObject[] {
        return sectors.map((sector, index) => {
            if (sector.id === editedSector?.sector.id) {
                return new OpenedContourObject(
                    [...editedSector.sector.vertices],
                    editedSector.sector.vertices.indexOf(editedSector.selectedVertex),
                    editedSector.sector.color
                );
            } else if (sectorWithTriangulationMesh?.mesh && sector.id === sectorWithTriangulationMesh?.sector.id) {
                const triangles = sectorWithTriangulationMesh.mesh;
                const contour = sectorWithTriangulationMesh.contour;
                return new TriangulatedContourObject(triangles, contour, sectorWithTriangulationMesh.sector.color);
            } else {
                const contour = new ClosedContourObject([...sector.vertices], sector.color, 10 + index);
                if (sector.id === selectedSectorOnList?.id) {
                    contour.lineThickness = 10;
                }
                return contour;
            }
        });
    }

    public sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;
        return { ribbon: this.ribbonActions };
    }

    private focusOnImage(): void {
        const zoom = ToolService.calculateZoomForImage(this.imageObject.size, this.activeCanvas.viewport);
        this.activeCanvas.setViewport(zoom, Vector.zero);
    }
}
