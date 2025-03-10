import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Vector } from '../../../core/models/math/vector.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../../../shared/color-picker/color-picker.component';
import { SectorsContoursService } from '../sectors-contours.service';
import { EditedSectorContour } from '../sectors-contours.interfaces';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Line } from '../../../core/models/math/line.model';
import { PresenceInPoligonHelper } from '../../../core/helpers/polygon/presence-in-polygon-helper';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sector-contour-edition',
    imports: [
        MatButtonModule,
        CommonModule,
        CdkDropList,
        CdkDrag,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        ColorPickerComponent,
        TranslateModule
    ],
    templateUrl: './sector-contour-edition.component.html',
    styleUrl: './sector-contour-edition.component.scss'
})
export class SectorContourEditionComponent implements OnInit {
    @Input()
    set sectorContour(value: EditedSectorContour) {
        this.sector = value.sector;
        this.selectedVertex = value.selectedVertex;
    }

    sector!: SectorSchema;
    selectedVertex!: Vector;

    usedSectorNames: string[];

    constructor(
        private store: Store,
        private snackbarService: MatSnackBar,
        private sectorsContoursService: SectorsContoursService,
        protected translate: TranslateService
    ) {}

    public ngOnInit(): void {
        this.usedSectorNames = this.store.selectSignal(selectSectors)()
            .filter(s => s.id !== this.sector.id)
            .map(s => s.name);
    }

    public addVertex(vertex: Vector): void {
        const indexOfSelectedVertex: number = this.sector.vertices.indexOf(this.selectedVertex);
        this.sector.vertices.splice(indexOfSelectedVertex + 1, 0, vertex);
        this.selectedVertex = vertex;
        this.emitContourChanged();
    }

    public removeVertex(vertex: Vector): void {
        this.sector.vertices = this.sector.vertices.filter((x) => x !== vertex);
        if (vertex === this.selectedVertex) {
            this.resetSelectedVertex();
        }

        this.emitContourChanged();
    }

    protected cancel(): void {
        this.sectorsContoursService.emitEditedSectorContour(null);
    }

    protected save(): void {
        if (this.isSectorValid()) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.sector }));
            this.sectorsContoursService.emitEditedSectorContour(null);
        }
    }

    private isSectorValid(): boolean {
        if (!this.sector.name) {
            this.showWarning(this.translate.instant('tool.sectors.sectorContour.nameRequired'));
            return false;
        }

        if(this.usedSectorNames.includes(this.sector.name)) {
            this.showWarning(this.translate.instant('tool.sectors.sectorContour.nameAlreadyInUse'));
            return false;
        }

        if (this.sector.vertices.length < 3) {
            this.showWarning(this.translate.instant('tool.sectors.sectorContour.tooFewVertices'));
            return false;
        }

        if (this.areSectorLineIntersecting(this.sector.vertices)) {
            this.showWarning(this.translate.instant('tool.sectors.sectorContour.linesCannotIntersecting'));
            return false;
        }

        return true;
    }

    private areSectorLineIntersecting(vertices: Vector[]): boolean {
        const lines: Line[] = [];

        for (let i = 0; i < vertices.length; ++i) {
            lines.push(new Line(vertices.at(i), vertices.at(i - 1)));
        }

        for (let i = 0; i < vertices.length; ++i) {
            for (let j = 0; j < vertices.length; ++j) {
                if (i === j || (i + 1) % vertices.length === j || (j + 1) % vertices.length === i) {
                    continue;
                }

                if (PresenceInPoligonHelper.areLineIntersecting(lines[i], lines[j])) {
                    return true;
                }
            }
        }

        return false;
    }

    private showWarning(message: string): void {
        this.snackbarService.open(message, this.translate.instant('common.ok'), { duration: 3000 });
    }

    protected onBoxSelected(vertex: Vector): void {
        this.selectedVertex = vertex;
        this.emitContourChanged();
    }

    protected onColorChanged(): void {
        this.emitContourChanged();
    }

    protected dropVertexBox(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.sector.vertices, event.previousIndex, event.currentIndex);
        this.emitContourChanged();
    }

    protected getVertexLabel(vertex: Vector): string {
        return `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`;
    }

    private resetSelectedVertex(): void {
        this.selectedVertex = this.sector.vertices.length ? this.sector.vertices.at(-1) : null;
    }

    private emitContourChanged(): void {
        this.sectorsContoursService.emitEditedSectorContour({
            sector: this.sector,
            selectedVertex: this.selectedVertex,
        });
    }
}
