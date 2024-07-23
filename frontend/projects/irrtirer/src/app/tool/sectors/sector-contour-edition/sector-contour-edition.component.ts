import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Vector } from '../../../core/models/point.model';
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
import { Sector } from '../../../core/models/mosaic-project.model';

@Component({
    selector: 'app-sector-contour-edition',
    standalone: true,
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
    ],
    templateUrl: './sector-contour-edition.component.html',
    styleUrl: './sector-contour-edition.component.scss',
})
export class SectorContourEditionComponent {
    @Input()
    set sectorContour(value: EditedSectorContour) {
        this.sector = value.sector;
        this.selectedVertex = value.selectedVertex;
    }

    sector!: Sector;
    selectedVertex!: Vector;

    constructor(private store: Store, private sectorsContoursSevice: SectorsContoursService) {}

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

    cancel(): void {
        this.sectorsContoursSevice.emitEditedSectorContour(null);
    }

    save(): void {
        if (this.isSectorValid()) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.sector }));
            this.sectorsContoursSevice.emitEditedSectorContour(null);
        }
    }

    private isSectorValid(): boolean {
        //TODO Snackbar
        return !!this.sector.name && this.sector.vertices.length >= 3;
    }

    onBoxSelected(vertex: Vector): void {
        this.selectedVertex = vertex;
        this.emitContourChanged();
    }

    onColorChanged(): void {
        this.emitContourChanged();
    }

    dropVertexBox(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.sector.vertices, event.previousIndex, event.currentIndex);
        this.emitContourChanged();
    }

    getVertexLabel(vetex: Vector): string {
        return `(${vetex.x.toFixed(2)}, ${vetex.y.toFixed(2)})`;
    }

    resetSelectedVertex(): void {
        this.selectedVertex = this.sector.vertices.length ? this.sector.vertices.at(-1) : null;
    }

    private emitContourChanged(): void {
        this.sectorsContoursSevice.emitEditedSectorContour({
            sector: this.sector,
            selectedVertex: this.selectedVertex,
        });
    }
}
