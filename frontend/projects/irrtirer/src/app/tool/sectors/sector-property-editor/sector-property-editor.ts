import { Component, DestroyRef, effect, inject, OnInit, Optional, signal, SkipSelf } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { form, required, min, max, submit, FieldState, FormField } from '@angular/forms/signals';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFramedButton } from 'irr-design-system/action';
import { IdsTooltip } from 'irr-design-system/tooltip';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';
import { SectorTriangulationRequestModel } from '../../../core/models/api/api.models';
import { SectorSchema, SectorSchemaProperties } from '../../../core/models/mosaic-project.model';
import { TriangulationApi } from '../../../core/services/triangulation-api/triangulation-api';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { SectorsEventBus } from '../sectors-event-bus';
import { ExtendedPanel } from './extended-panel/extended-panel';

@Component({
    selector: 'app-sector-property-editor',
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useFactory: (parentOptions: MatFormFieldDefaultOptions) => ({
                ...parentOptions,
                subscriptSizing: 'dynamic',
            }),
            deps: [[new Optional(), new SkipSelf(), MAT_FORM_FIELD_DEFAULT_OPTIONS]],
        },
    ],
    imports: [IdsFramedButton, MatFormFieldModule, MatInputModule, IdsTooltip, ExtendedPanel, TranslatePipe, FormField],
    template: `
        <div class="flex flex-row gap-2.5">
            <ids-framed-button class="flex-1" (clicked)="cancel()"> {{ 'common.cancel' | translate }} </ids-framed-button>
            <ids-framed-button class="flex-1" variant="accent" (clicked)="save()"> {{ 'common.confirm' | translate }} </ids-framed-button>
        </div>

        <div class="sector-property-form">
            <app-extended-panel [label]="translate.instant('tool.sectors.sectorProperty.sectorsSize')">
                <div class="form-group">
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.maxAreaHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.maxArea' | translate }}</mat-label>
                        <input matInput [formField]="form.sectionMaxArea" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.sectionMaxArea()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.minAngleHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.minAngle' | translate }}</mat-label>
                        <input matInput [formField]="form.sectionMinAngle" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.sectionMinAngle()) }}</mat-error>
                    </mat-form-field>
                </div>
            </app-extended-panel>

            <app-extended-panel [label]="translate.instant('tool.sectors.sectorProperty.tilesLimitations')">
                <div class="form-group">
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.minRadiusHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.minRadius' | translate }}</mat-label>
                        <input matInput [formField]="form.minTileRadius" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.minTileRadius()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.maxRadiusHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.maxRadius' | translate }}</mat-label>
                        <input matInput [formField]="form.maxTileRadius" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.maxTileRadius()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.minMarginHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.minMargin' | translate }}</mat-label>
                        <input matInput [formField]="form.tilesMargin" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.tilesMargin()) }}</mat-error>
                    </mat-form-field>
                </div>
            </app-extended-panel>

            <app-extended-panel [label]="translate.instant('tool.sectors.sectorProperty.populationParams')" [shouldBeOpen]="false">
                <div class="form-group">
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.initialPopulationSizeHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.initialPopulationSize' | translate }}</mat-label>
                        <input matInput [formField]="form.populationParams.initialPopulationSize" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.populationParams.initialPopulationSize()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.populationSizeHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.populationSize' | translate }}</mat-label>
                        <input matInput [formField]="form.populationParams.populationSize" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.populationParams.populationSize()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.iterationsCountHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.iterationsCount' | translate }}</mat-label>
                        <input matInput [formField]="form.populationParams.iterationsCount" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.populationParams.iterationsCount()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.countOfTrianglePositionDrawsHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.countOfTrianglePositionDraws' | translate }}</mat-label>
                        <input matInput [formField]="form.populationParams.countOfTrianglePositionDraws" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.populationParams.countOfTrianglePositionDraws()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.countOfTriesToInsertTileHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.countOfTriesToInsertTile' | translate }}</mat-label>
                        <input matInput [formField]="form.populationParams.countOfTriesToInsertTile" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.populationParams.countOfTriesToInsertTile()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.countOfColorMatchingAttemptsHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.countOfColorMatchingAttempts' | translate }}</mat-label>
                        <input matInput [formField]="form.populationParams.countOfColorMatchingAttempts" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.populationParams.countOfColorMatchingAttempts()) }}</mat-error>
                    </mat-form-field>
                </div>
            </app-extended-panel>

            <app-extended-panel [label]="translate.instant('tool.sectors.sectorProperty.evaluationParams')" [shouldBeOpen]="false">
                <div class="form-group">
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.singleSectionPopulationHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.singleSectionPopulation' | translate }}</mat-label>
                        <input matInput [formField]="form.evaluationParams.singleSectionPopulation" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.evaluationParams.singleSectionPopulation()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.overlappingAreaOutsideSectorHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.overlappingAreaOutsideSector' | translate }}</mat-label>
                        <input matInput [formField]="form.evaluationParams.overlappingAreaOutsideSector" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.evaluationParams.overlappingAreaOutsideSector()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.overlappingAreaOutsideSectorHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.additionalPopulationOfNeighboringSectors' | translate }}</mat-label>
                        <input matInput [formField]="form.evaluationParams.additionalPopulationOfNeighboringSectors" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.evaluationParams.additionalPopulationOfNeighboringSectors()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.overlappingNotPopulatedSectionsHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.overlappingNotPopulatedSections' | translate }}</mat-label>
                        <input matInput [formField]="form.evaluationParams.overlappingNotPopulatedSections" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.evaluationParams.overlappingNotPopulatedSections()) }}</mat-error>
                    </mat-form-field>
                    <mat-form-field
                        class="density-3"
                        [idsTooltip]="translate.instant('tool.sectors.sectorProperty.tileColorMismatchHint')"
                        idsTooltipPosition="left"
                    >
                        <mat-label>{{ 'tool.sectors.sectorProperty.tileColorMismatch' | translate }}</mat-label>
                        <input matInput [formField]="form.evaluationParams.tileColorMismatch" type="number" />
                        <mat-error>{{ getFieldErrorLabel(form.evaluationParams.tileColorMismatch()) }}</mat-error>
                    </mat-form-field>
                </div>
            </app-extended-panel>
        </div>
    `,
    styleUrl: './sector-property-editor.scss',
})
export class SectorPropertyEditor implements OnInit {
    private sector!: SectorSchema;

    private readonly store = inject(Store);

    private readonly triangulationApi = inject(TriangulationApi);

    private readonly snackBar = inject(MatSnackBar);

    private readonly service = inject(SectorsEventBus);

    protected readonly translate = inject(TranslateService);

    private readonly route = inject(ActivatedRoute);

    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    private readonly errorLabels: Record<string, () => string> = {
        required: () => this.translate.instant('common.fieldRequired'),
        valueToSmall: () => this.translate.instant('tool.sectors.sectorProperty.valueToSmall'),
        sectionMinAngleOutOfRange: () => this.translate.instant('tool.sectors.sectorProperty.sectionMinAngleOutOfRange'),
        valueCannotBeNegative: () => this.translate.instant('tool.sectors.sectorProperty.valueCannotBeNegative'),
    };

    private readonly formData = signal<SectorSchemaProperties>({
        sectionMaxArea: 0,
        sectionMinAngle: 0,
        minTileRadius: 0,
        maxTileRadius: 0,
        tilesMargin: 0,
        populationParams: {
            initialPopulationSize: 0,
            countOfTriesToInsertTile: 0,
            countOfTrianglePositionDraws: 0,
            countOfColorMatchingAttempts: 0,
            iterationsCount: 0,
            populationSize: 0,
        },
        evaluationParams: {
            singleSectionPopulation: 0,
            overlappingAreaOutsideSector: 0,
            additionalPopulationOfNeighboringSectors: 0,
            overlappingNotPopulatedSections: 0,
            tileColorMismatch: 0,
        },
    });

    protected readonly form = form(this.formData, (schemaPath) => {
        required(schemaPath.sectionMaxArea);
        min(schemaPath.sectionMaxArea, 0.01, { error: { kind: 'valueToSmall' } });

        required(schemaPath.sectionMinAngle);
        min(schemaPath.sectionMinAngle, 10, { error: { kind: 'sectionMinAngleOutOfRange' } });
        max(schemaPath.sectionMinAngle, 90, { error: { kind: 'sectionMinAngleOutOfRange' } });

        min(schemaPath.minTileRadius, 0.0, { error: { kind: 'valueCannotBeNegative' } });
        min(schemaPath.maxTileRadius, 0.01, { error: { kind: 'valueToSmall' } });
        min(schemaPath.tilesMargin, 0.01, { error: { kind: 'valueToSmall' } });
        required(schemaPath.tilesMargin);

        required(schemaPath.populationParams.initialPopulationSize);
        required(schemaPath.populationParams.countOfTriesToInsertTile);
        required(schemaPath.populationParams.countOfTrianglePositionDraws);
        required(schemaPath.populationParams.countOfColorMatchingAttempts);
        required(schemaPath.populationParams.iterationsCount);
        required(schemaPath.populationParams.populationSize);

        required(schemaPath.evaluationParams.singleSectionPopulation);
        required(schemaPath.evaluationParams.overlappingAreaOutsideSector);
        required(schemaPath.evaluationParams.additionalPopulationOfNeighboringSectors);
        required(schemaPath.evaluationParams.overlappingNotPopulatedSections);
        required(schemaPath.evaluationParams.tileColorMismatch);
    });

    public ngOnInit(): void {
        this.prepareSector();
    }

    protected readonly triangulationMeshEffect = effect(() => {
        const sectorTriangulationRequestData: SectorTriangulationRequestModel = {
            polygonVertices: this.sector.vertices,
            sectionMaxArea: this.form.sectionMaxArea().value(),
            sectionMinAngle: this.form.sectionMinAngle().value(),
        };

        this.triangulationApi
            .getPolygonTriangulationMesh(sectorTriangulationRequestData)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (mesh) =>
                    this.service.emitEditedSectorProperty({
                        sector: this.sector,
                        mesh: mesh.triangles,
                        contour: mesh.contour,
                    }),
                error: () => this.showPolygonTriangulationError(),
            });
    });

    private prepareSector(): void {
        const sectorId = this.route.snapshot.paramMap.get('id');
        if (sectorId) {
            this.sector = this.store
                .selectSignal(selectSectors)()
                .find((s) => s.id === sectorId)!;

            const properties = this.sector.properties;
            this.formData.set({
                ...properties,
                populationParams: { ...properties.populationParams },
                evaluationParams: { ...properties.evaluationParams },
            });
        }
    }

    private navigateToSectorList(): void {
        this.router.navigate([`/tool/sectors`]);
    }

    protected cancel(): void {
        this.service.emitEditedSectorProperty(null);
        this.navigateToSectorList();
    }

    protected getFieldErrorLabel(field: FieldState<unknown>): string | null {
        return FormHelper.getFieldErrorLabel(field, this.errorLabels);
    }

    protected save(): void {
        submit(this.form, async () => {
            const properties: SectorSchemaProperties = this.formData();

            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: { ...this.sector, properties } }));
            this.service.emitEditedSectorProperty(null);
            this.navigateToSectorList();
        });
    }

    private showPolygonTriangulationError(): void {
        this.snackBar.open(this.translate.instant('tool.sectors.sectorProperty.errorOnSectorMeshRequesting'), this.translate.instant('common.ok'), {
            duration: 2000,
        });
    }
}
