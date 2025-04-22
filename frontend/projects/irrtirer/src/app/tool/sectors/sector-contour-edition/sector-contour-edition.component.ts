import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Vector } from '../../../core/models/math/vector.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../../../shared/color-picker/color-picker.component';
import { SectorsContoursService } from '../sectors-contours.service';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { nonUniqueValueValidator } from '../../../core/validators/unique-value.validator';
import { polygonValidator } from './polygon.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface SectorContourForm {
    name: FormControl<string>;
    color: FormControl<string>;
    vertices: FormControl<Vector[]>;
}

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
    private sector!: SectorSchema;

    protected readonly selectedVertex = signal<Vector | null>(null);

    protected sectorForm!: FormGroup<SectorContourForm>;

    private readonly store = inject(Store);

    private readonly snackbarService = inject(MatSnackBar);

    private readonly sectorsContoursService = inject(SectorsContoursService);

    protected readonly translate = inject(TranslateService);

    private readonly fb = inject(FormBuilder);

    private readonly route = inject(ActivatedRoute);

    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    private readonly changeDetector = inject(ChangeDetectorRef);

    public ngOnInit(): void {
        this.prepareSector();
        this.initForm();
        this.subscribeOnCanvasClicked();
        this.emitContourPreviewChanged();
    }

    private subscribeOnCanvasClicked(): void {
        this.sectorsContoursService.canvasClicked$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((vector) => this.addVertex(new Vector(vector.x, vector.y)));
    }

    private prepareSector(): void {
        const sectorId = this.route.snapshot.paramMap.get('id');
        if (sectorId) {
            this.sector = this.store
                .selectSignal(selectSectors)()
                .find((s) => s.id === sectorId)!;
            this.selectedVertex.set(this.sector.vertices[0]);
        } else {
            this.sector = SectorsContoursService.createNewSector();
        }
    }

    private initForm(): void {
        const usedSectorNames: string[] = this.store
            .selectSignal(selectSectors)()
            .filter((s) => s.id !== this.sector.id)
            .map((s) => s.name);

        this.sectorForm = this.fb.group<SectorContourForm>({
            name: this.fb.nonNullable.control(this.sector.name, { validators: [Validators.required, nonUniqueValueValidator(usedSectorNames)] }),
            color: this.fb.nonNullable.control(this.sector.color, { validators: [Validators.required] }),
            vertices: this.fb.nonNullable.control(this.sector.vertices, { validators: [polygonValidator()] }),
        });

        this.sectorForm.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.changeDetector.markForCheck());
    }

    private addVertex(vertex: Vector): void {
        const vertices: Vector[] = [...this.sectorForm.controls.vertices.value];
        const indexOfSelectedVertex: number = vertices.indexOf(this.selectedVertex());
        vertices.splice(indexOfSelectedVertex + 1, 0, vertex);

        this.sectorForm.controls.vertices.setValue(vertices);
        this.selectedVertex.set(vertex);
        this.emitContourPreviewChanged();
    }

    public removeVertex(vertex: Vector): void {
        const vertices: Vector[] = this.sectorForm.controls.vertices.value.filter((x) => x !== vertex);

        this.sectorForm.controls.vertices.setValue(vertices);
        if (vertex === this.selectedVertex()) {
            this.resetSelectedVertex();
        }

        this.emitContourPreviewChanged();
    }

    protected navigateToSectorList(): void {
        this.router.navigate([`/tool/sectors`]);
    }

    protected cancel(): void {
        this.sectorsContoursService.emitEditedSectorContour(null);
        this.navigateToSectorList();
    }

    protected save(): void {
        if (this.sectorForm.valid) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.getUpdatedSectorModel() }));
            this.sectorsContoursService.emitEditedSectorContour(null);
            this.navigateToSectorList();
        } else {
            this.showWarning(this.showValidationError());
        }
    }

    private showValidationError(): string {
        if (this.sectorForm.controls.name.hasError('required')) {
            return this.translate.instant('tool.sectors.sectorContour.nameRequired');
        }
        if (this.sectorForm.controls.name.hasError('nonUnique')) {
            return this.translate.instant('tool.sectors.sectorContour.nameAlreadyInUse');
        }
        if (this.sectorForm.controls.vertices.hasError('tooFewVertices')) {
            return this.translate.instant('tool.sectors.sectorContour.tooFewVertices');
        }
        if (this.sectorForm.controls.vertices.hasError('edgesIntersect')) {
            return this.translate.instant('tool.sectors.sectorContour.linesCannotIntersecting');
        }

        return '';
    }

    private showWarning(message: string): void {
        this.snackbarService.open(message, this.translate.instant('common.ok'), { duration: 3000 });
    }

    protected onBoxSelected(vertex: Vector): void {
        this.selectedVertex.set(vertex);
        this.emitContourPreviewChanged();
    }

    protected onColorChanged(): void {
        this.emitContourPreviewChanged();
    }

    protected dropVertexBox(event: CdkDragDrop<string[]>): void {
        const vertices: Vector[] = this.sectorForm.controls.vertices.value;
        moveItemInArray(vertices, event.previousIndex, event.currentIndex);
        this.sectorForm.controls.vertices.setValue(vertices);

        this.emitContourPreviewChanged();
    }

    protected getVertexLabel(vertex: Vector): string {
        return `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`;
    }

    private resetSelectedVertex(): void {
        const vertices: Vector[] = this.sectorForm.controls.vertices.value;
        this.selectedVertex.set(vertices.at(-1) ?? null);
    }

    private emitContourPreviewChanged(): void {
        this.sectorsContoursService.emitEditedSectorContour({
            sector: this.getUpdatedSectorModel(),
            selectedVertex: this.selectedVertex(),
        });
    }

    private getUpdatedSectorModel(): SectorSchema {
        const formValue = this.sectorForm.getRawValue();

        return {
            ...this.sector,
            color: formValue.color,
            name: formValue.name,
            vertices: formValue.vertices,
        };
    }
}
