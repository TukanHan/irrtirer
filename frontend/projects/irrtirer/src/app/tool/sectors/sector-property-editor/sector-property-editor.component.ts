import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, OnInit, Optional, signal, SkipSelf } from '@angular/core';
import { SectorsContoursService } from '../sectors-contours.service';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SectorSchema, SectorSchemaProperties } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { ExtendedPanelComponent } from './extended-panel/extended-panel.component';
import { DataService } from '../../../core/services/data/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SectorTriangulationRequestModel } from '../../../core/models/api/api.models';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { form, required, min, max, Field, submit, FieldState } from '@angular/forms/signals';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';

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
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, ExtendedPanelComponent, TranslateModule, Field],
    templateUrl: './sector-property-editor.component.html',
    styleUrl: './sector-property-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorPropertyEditorComponent implements OnInit {
    private sector!: SectorSchema;

    private readonly store = inject(Store);

    private readonly dataService = inject(DataService);

    private readonly snackBar = inject(MatSnackBar);

    private readonly service = inject(SectorsContoursService);

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

        min(schemaPath.minTileRadius, 0.00, { error: { kind: 'valueCannotBeNegative' } });
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

        this.dataService
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

    protected getFieldErrorLabel(field: FieldState<unknown>): string {
        const x = FormHelper.getFieldErrorLabel(field, this.errorLabels);
        return x;
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
