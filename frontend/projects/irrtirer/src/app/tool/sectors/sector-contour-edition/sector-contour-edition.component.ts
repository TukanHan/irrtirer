import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Vector } from '../../../core/models/math/vector.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../../../shared/color-picker/color-picker.component';
import { SectorsContoursService } from '../sectors-contours.service';
import { EditedSectorContour } from '../sectors-contours.interfaces';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { nonUniqueValueValidator } from '../../../core/validators/unique-value.validator';
import { polygonValidator } from './polygon.validator';

@Component({
    selector: 'app-sector-contour-edition',
    imports: [
        MatButtonModule,
        CommonModule,
        CdkDropList,
        CdkDrag,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ColorPickerComponent,
        TranslateModule,
        ReactiveFormsModule,
    ],
    templateUrl: './sector-contour-edition.component.html',
    styleUrl: './sector-contour-edition.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorContourEditionComponent implements OnInit {
    @Input()
    public set sectorContour(value: EditedSectorContour) {
        this.sector = value.sector;
        this.selectedVertex = value.selectedVertex;
    }

    protected sector!: SectorSchema;

    protected selectedVertex!: Vector;

    protected sectorForm: FormGroup;

    constructor(
        private store: Store,
        private snackbarService: MatSnackBar,
        private sectorsContoursService: SectorsContoursService,
        protected translate: TranslateService,
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        const usedSectorNames: string[] = this.store
            .selectSignal(selectSectors)()
            .filter((s) => s.id !== this.sector.id)
            .map((s) => s.name);

        this.sectorForm = this.formBuilder.group({
            name: [this.sector.name, [Validators.required, nonUniqueValueValidator(usedSectorNames)]],
            color: [this.sector.color, [Validators.required]],
            vertices: [this.sector.vertices, [polygonValidator()]],
        });
    }

    public addVertex(vertex: Vector): void {
        const vertices: Vector[] = [...this.sectorForm.value.vertices];
        const indexOfSelectedVertex: number = vertices.indexOf(this.selectedVertex);
        vertices.splice(indexOfSelectedVertex + 1, 0, vertex);

        this.sectorForm.get('vertices').setValue(vertices);
        this.selectedVertex = vertex;
        this.emitContourChanged();
    }

    public removeVertex(vertex: Vector): void {
        const vertices: Vector[] = this.sectorForm.value.vertices.filter((x) => x !== vertex);

        this.sectorForm.get('vertices').setValue(vertices);
        if (vertex === this.selectedVertex) {
            this.resetSelectedVertex();
        }

        this.emitContourChanged();
    }

    protected cancel(): void {
        this.sectorsContoursService.emitEditedSectorContour(null);
    }

    protected save(): void {
        if (this.sectorForm.valid) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.getUpdatedSectorModel() }));
            this.sectorsContoursService.emitEditedSectorContour(null);
        } else {
            this.showWarning(this.showValidationError());
        }
    }

    private showValidationError(): string {
        if (this.sectorForm.get('name').hasError('required')) {
            return this.translate.instant('tool.sectors.sectorContour.nameRequired');
        }
        if (this.sectorForm.get('name').hasError('nonUnique')) {
            return this.translate.instant('tool.sectors.sectorContour.nameAlreadyInUse');
        }
        if (this.sectorForm.get('vertices').hasError('tooFewVertices')) {
            return this.translate.instant('tool.sectors.sectorContour.tooFewVertices');
        }
        if (this.sectorForm.get('vertices').hasError('edgesIntersect')) {
            return this.translate.instant('tool.sectors.sectorContour.linesCannotIntersecting');
        }

        return '';
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
        const vertices: Vector[] = this.sectorForm.value.vertices;
        moveItemInArray(vertices, event.previousIndex, event.currentIndex);
        this.sectorForm.get('vertices').setValue(vertices);

        this.emitContourChanged();
    }

    protected getVertexLabel(vertex: Vector): string {
        return `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`;
    }

    private resetSelectedVertex(): void {
        const vertices: Vector[] = this.sectorForm.value.vertices;
        this.selectedVertex = vertices.length ? vertices.at(-1) : null;
    }

    private emitContourChanged(): void {
        this.sectorsContoursService.emitEditedSectorContour({
            sector: this.getUpdatedSectorModel(),
            selectedVertex: this.selectedVertex,
        });
    }

    private getUpdatedSectorModel(): SectorSchema {
        return {
            ...this.sector,
            color: this.sectorForm.value.color,
            name: this.sectorForm.value.name,
            vertices: this.sectorForm.value.vertices,
        };
    }
}
