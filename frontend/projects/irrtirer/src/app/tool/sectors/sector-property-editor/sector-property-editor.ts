import { Component, DestroyRef, effect, inject, OnInit, Optional, signal, SkipSelf } from '@angular/core';
import { SectorsEventBus } from '../sectors-event-bus';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SectorSchema, SectorSchemaProperties } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { ExtendedPanel } from './extended-panel/extended-panel';
import { TriangulationApi } from '../../../core/services/triangulation-api/triangulation-api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SectorTriangulationRequestModel } from '../../../core/models/api/api.models';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { form, required, min, max, submit, FieldState, FormField } from '@angular/forms/signals';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';
import { IdsFramedButton } from 'irr-design-system/action';
import { IdsTooltip } from 'irr-design-system/tooltip';

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
    templateUrl: './sector-property-editor.html',
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
