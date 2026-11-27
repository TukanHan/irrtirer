import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FieldState, form, FormField, required } from '@angular/forms/signals';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFlatButton, IdsFramedButton } from 'irr-design-system/action';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';
import { Vector } from '../../../core/models/math/vector.model';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { nonUniqueValueValidator } from '../../../core/validators/unique-value.validator';
import { ColorPicker } from '../../../shared/color-picker/color-picker';
import { SectorsEventBus } from '../sectors-event-bus';
import { polygonValidator } from './polygon.validator';

@Component({
    selector: 'app-sector-contour-edition',
    imports: [
        IdsFramedButton,
        IdsFlatButton,
        CdkDropList,
        CdkDrag,
        MatFormField,
        MatLabel,
        MatError,
        MatInput,
        MatIcon,
        ColorPicker,
        TranslatePipe,
        FormField,
    ],
    template: `
        <div class="flex flex-row gap-2.5">
            <ids-framed-button class="flex-1" (clicked)="cancel()"> {{ 'common.cancel' | translate }} </ids-framed-button>
            <ids-framed-button class="flex-1" variant="accent" (clicked)="save()"> {{ 'common.confirm' | translate }} </ids-framed-button>
        </div>

        <div class="info">
            <mat-form-field class="density-3" subscriptSizing="dynamic">
                <mat-label>{{ 'tool.sectors.sectorContour.sectorName' | translate }}</mat-label>
                <input matInput [formField]="form.name" />
                <mat-error>{{ getFieldErrorLabel(form.name()) }}</mat-error>
            </mat-form-field>

            <app-color-picker [label]="translate.instant('tool.sectors.sectorContour.sectorColor')" [formField]="form.color" />

            @if (form.vertices().value().length) {
                <div cdkDropList class="vertices-list" (cdkDropListDropped)="dropVertexBox($event)">
                    @for (vertex of form.vertices().value(); track vertex) {
                        <div cdkDrag class="vertex-box" (mousedown)="onBoxSelected(vertex)">
                            <div class="list-item-box" [class.selected]="vertex === selectedVertex()">
                                <span class="block-label">{{ getVertexLabel(vertex) }}</span>
                                <ids-flat-button
                                    class="vertex-remove button-size-8 button-content-contrast-medium"
                                    [ariaLabel]="'tool.sectors.sectorContour.removeVertex' | translate"
                                    (clicked)="removeVertex(vertex)"
                                    (mousedown)="$event.stopPropagation()"
                                >
                                    <mat-icon>close</mat-icon>
                                </ids-flat-button>
                            </div>
                        </div>
                    }
                </div>
            } @else {
                <div class="no-vertices">{{ 'tool.sectors.sectorContour.addSectorVertices' | translate }}</div>
            }
        </div>
    `,
    styleUrl: './sector-contour-edition.scss',
})
export class SectorContourEdition implements OnInit {
    protected readonly selectedVertex = signal<Vector | null>(null);

    private readonly store = inject(Store);

    private readonly snackbarService = inject(MatSnackBar);

    private readonly sectorsEventBus = inject(SectorsEventBus);

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

    private readonly formData = signal<SectorSchema>(SectorsEventBus.createNewSector());

    private readonly usedSectorNames = computed<string[]>(() =>
        this.existingSectors()
            .filter((s) => s.id !== this.formData().id)
            .map((s) => s.name),
    );

    protected readonly form = form<SectorSchema>(this.formData, (schemaPath) => {
        required(schemaPath.name);
        nonUniqueValueValidator(schemaPath.name, this.usedSectorNames);

        required(schemaPath.color);

        polygonValidator(schemaPath.vertices);
    });

    public ngOnInit(): void {
        this.prepareSector();
        this.subscribeOnCanvasClicked();
    }

    private subscribeOnCanvasClicked(): void {
        this.sectorsEventBus.canvasClicked$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((vector) => this.addVertex(new Vector(vector.x, vector.y)));
    }

    private prepareSector(): void {
        const sectorId = this.route.snapshot.paramMap.get('id');
        const sector = this.existingSectors().find((s) => s.id === sectorId);
        if (sector) {
            this.formData.set({
                ...sector,
                vertices: sector!.vertices.map((v) => new Vector(v.x, v.y)),
            });

            this.selectedVertex.set(this.formData().vertices[0]);
        }
    }

    private addVertex(vertex: Vector): void {
        const vertices: Vector[] = [...this.form.vertices().value()];
        const indexOfSelectedVertex: number = vertices.indexOf(this.selectedVertex()!);
        vertices.splice(indexOfSelectedVertex + 1, 0, vertex);

        this.form.vertices().controlValue.set(vertices);
        this.selectedVertex.set(vertex);
    }

    public removeVertex(vertex: Vector): void {
        const vertices: Vector[] = this.form
            .vertices()
            .value()
            .filter((x) => x !== vertex);

        this.form.vertices().controlValue.set(vertices);
        if (vertex === this.selectedVertex()) {
            this.resetSelectedVertex();
        }
    }

    protected navigateToSectorList(): void {
        this.router.navigate([`/tool/sectors`]);
    }

    protected cancel(): void {
        this.sectorsEventBus.emitEditedSectorContour(null);
        this.navigateToSectorList();
    }

    protected save(): void {
        if (this.form().valid()) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.formData() }));
            this.sectorsEventBus.emitEditedSectorContour(null);
            this.navigateToSectorList();
        } else {
            const errorMessage = this.showValidationError();
            if (errorMessage) {
                this.showWarning(errorMessage);
            }
        }
    }

    private showValidationError(): string | null {
        const errors = this.form().errorSummary();
        return FormHelper.getErrorLabel(errors, this.errorLabels);
    }

    protected getFieldErrorLabel(field: FieldState<unknown>): string | null {
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
        this.form.vertices().controlValue.set(vertices);
    }

    protected getVertexLabel(vertex: Vector): string {
        return `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`;
    }

    private resetSelectedVertex(): void {
        const vertices: Vector[] = this.form.vertices().value();
        this.selectedVertex.set(vertices.at(-1) ?? null);
    }

    protected readonly onContourChangeEffect = effect(() => {
        this.sectorsEventBus.emitEditedSectorContour({
            sector: this.formData(),
            selectedVertex: this.selectedVertex()!,
        });
    });
}
