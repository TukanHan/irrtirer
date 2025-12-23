import { ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Vector } from '../../../core/models/math/vector.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../../../shared/color-picker/color-picker.component';
import { SectorsContoursService } from '../sectors-contours.service';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { nonUniqueValueValidatorFactory } from '../../../core/validators/unique-value.validator';
import { polygonValidator } from './polygon.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Field, FieldState, form, required, validate } from '@angular/forms/signals';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';

@Component({
    selector: 'app-sector-contour-edition',
    imports: [MatButtonModule, CdkDropList, CdkDrag, MatFormFieldModule, MatInputModule, MatIconModule, ColorPickerComponent, TranslateModule, Field],
    templateUrl: './sector-contour-edition.component.html',
    styleUrl: './sector-contour-edition.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorContourEditionComponent implements OnInit {
    protected readonly selectedVertex = signal<Vector | null>(null);

    private readonly store = inject(Store);

    private readonly snackbarService = inject(MatSnackBar);

    private readonly sectorsContoursService = inject(SectorsContoursService);

    protected readonly translate = inject(TranslateService);

    private readonly route = inject(ActivatedRoute);

    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    private readonly existingSectors = this.store.selectSignal(selectSectors);

    private readonly errorLabels: Record<string, () => string> = {
        edgesIntersect: () => this.translate.instant('tool.sectors.sectorContour.linesCannotIntersecting'),
        tooFewVertices: () => this.translate.instant('tool.sectors.sectorContour.tooFewVertices'),
        nonUnique: () => this.translate.instant('tool.sectors.sectorContour.nameAlreadyInUse'),
        required: () => this.translate.instant('tool.sectors.sectorContour.nameRequired'),
    };

    private readonly formData = signal<SectorSchema>({
        id: null,
        name: null,
        color: null,
        vertices: [],
        properties: null,
    });

    private readonly usedSectorNames = computed<string[]>(() =>
        this.existingSectors()
            .filter((s) => s.id !== this.formData().id)
            .map((s) => s.name),
    );

    protected readonly form = form<SectorSchema>(this.formData, (schemaPath) => {
        required(schemaPath.name);
        validate(schemaPath.name, nonUniqueValueValidatorFactory(this.usedSectorNames));

        required(schemaPath.color);

        validate(schemaPath.vertices, polygonValidator);
    });

    public ngOnInit(): void {
        this.prepareSector();
        this.subscribeOnCanvasClicked();
    }

    private subscribeOnCanvasClicked(): void {
        this.sectorsContoursService.canvasClicked$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((vector) => this.addVertex(new Vector(vector.x, vector.y)));
    }

    private prepareSector(): void {
        const sectorId = this.route.snapshot.paramMap.get('id');
        if (sectorId) {
            const sector = this.existingSectors().find((s) => s.id === sectorId);
            this.formData.set({
                ...sector,
                vertices: sector!.vertices.map((v) => new Vector(v.x, v.y)),
            });

            this.selectedVertex.set(this.formData().vertices[0]);
        } else {
            const newSector = SectorsContoursService.createNewSector();
            this.formData.set(newSector);
        }
    }

    private addVertex(vertex: Vector): void {
        const vertices: Vector[] = [...this.form.vertices().value()];
        const indexOfSelectedVertex: number = vertices.indexOf(this.selectedVertex());
        vertices.splice(indexOfSelectedVertex + 1, 0, vertex);

        this.form.vertices().setControlValue(vertices);
        this.selectedVertex.set(vertex);
    }

    public removeVertex(vertex: Vector): void {
        const vertices: Vector[] = this.form
            .vertices()
            .value()
            .filter((x) => x !== vertex);

        this.form.vertices().setControlValue(vertices);
        if (vertex === this.selectedVertex()) {
            this.resetSelectedVertex();
        }
    }

    protected navigateToSectorList(): void {
        this.router.navigate([`/tool/sectors`]);
    }

    protected cancel(): void {
        this.sectorsContoursService.emitEditedSectorContour(null);
        this.navigateToSectorList();
    }

    protected save(): void {
        if (this.form().valid()) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.formData() }));
            this.sectorsContoursService.emitEditedSectorContour(null);
            this.navigateToSectorList();
        } else {
            this.showWarning(this.showValidationError());
        }
    }

    private showValidationError(): string {
        const errors = this.form().errorSummary();
        return FormHelper.getErrorLabel(errors, this.errorLabels);
    }

    protected getFieldErrorLabel(field: FieldState<unknown>): string {
        return FormHelper.getErrorLabel(field.errorSummary(), this.errorLabels);
    }

    private showWarning(message: string): void {
        this.snackbarService.open(message, this.translate.instant('common.ok'), { duration: 3000 });
    }

    protected onBoxSelected(vertex: Vector): void {
        this.selectedVertex.set(vertex);
    }

    protected dropVertexBox(event: CdkDragDrop<string[]>): void {
        const vertices: Vector[] = this.form.vertices().value();
        moveItemInArray(vertices, event.previousIndex, event.currentIndex);
        this.form.vertices().setControlValue(vertices);
    }

    protected getVertexLabel(vertex: Vector): string {
        return `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`;
    }

    private resetSelectedVertex(): void {
        const vertices: Vector[] = this.form.vertices().value();
        this.selectedVertex.set(vertices.at(-1) ?? null);
    }

    protected readonly onContourChangeEffect = effect(() => {
        this.sectorsContoursService.emitEditedSectorContour({
            sector: this.formData(),
            selectedVertex: this.selectedVertex(),
        });
    });
}
