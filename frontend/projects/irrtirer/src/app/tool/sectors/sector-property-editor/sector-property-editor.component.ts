import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { SectorsContoursService } from '../sectors-contours.service';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
    SectorSchema,
    SectorSchemaEvaluationParams,
    SectorSchemaPopulationParams,
    SectorSchemaProperties,
} from '../../../core/models/mosaic-project.model';
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

interface SectorSchemaPropertiesForm {
    initialPopulationSize: FormControl<number>;
    countOfTriesToInsertTile: FormControl<number>;
    countOfTrianglePositionDraws: FormControl<number>;
    countOfColorMatchingAttempts: FormControl<number>;
    iterationsCount: FormControl<number>;
    populationSize: FormControl<number>;
}

export interface SectorSchemaEvaluationParamsForm {
    singleSectionPopulation: FormControl<number>;
    overlappingAreaOutsideSector: FormControl<number>;
    additionalPopulationOfNeighboringSectors: FormControl<number>;
    overlappingNotPopulatedSections: FormControl<number>;
    tileColorMismatch: FormControl<number>;
}

interface SectorSchemaForm {
    sectionMaxArea: FormControl<number>;
    sectionMinAngle: FormControl<number>;
    minTileRadius: FormControl<number>;
    maxTileRadius: FormControl<number>;
    tileMargin: FormControl<number>;
    populationParams: FormGroup<SectorSchemaPropertiesForm>;
    evaluationParams: FormGroup<SectorSchemaEvaluationParamsForm>;
}

@Component({
    selector: 'app-sector-property-editor',
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, ReactiveFormsModule, ExtendedPanelComponent, TranslateModule],
    templateUrl: './sector-property-editor.component.html',
    styleUrl: './sector-property-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorPropertyEditorComponent implements OnInit {
    private sector!: SectorSchema;

    protected sectorPropertyForm!: FormGroup<SectorSchemaForm>;

    private readonly fb = inject(FormBuilder);

    private readonly store = inject(Store);

    private readonly dataService = inject(DataService);

    private readonly snackBar = inject(MatSnackBar);

    private readonly service = inject(SectorsContoursService);

    protected readonly translate = inject(TranslateService);

    private readonly route = inject(ActivatedRoute);

    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    public ngOnInit(): void {
        this.prepareSector();
        this.sectorPropertyForm = this.generateForm(this.sector.properties);
        this.getTriangulationMesh();
    }

    private prepareSector(): void {
        const sectorId = this.route.snapshot.paramMap.get('id');
        if (sectorId) {
            this.sector = this.store
                .selectSignal(selectSectors)()
                .find((s) => s.id === sectorId)!;
        }
    }

    private generateForm(properties: SectorSchemaProperties): FormGroup {
        return this.fb.group({
            sectionMaxArea: [properties.sectionMaxArea, [Validators.required, Validators.min(0.1)]],
            sectionMinAngle: [properties.sectionMinAngle, [Validators.required, Validators.min(10), Validators.max(90)]],
            minTileRadius: [properties.minTileRadius, [Validators.min(0)]],
            maxTileRadius: [properties.maxTileRadius, [Validators.min(0)]],
            tileMargin: [properties.tilesMargin, [Validators.required]],
            populationParams: this.generatePopulationParamsForm(properties.populationParams),
            evaluationParams: this.generateEvaluationParamsForm(properties.evaluationParams),
        });
    }

    private generatePopulationParamsForm(properties: SectorSchemaPopulationParams): FormGroup {
        return this.fb.group({
            initialPopulationSize: [properties.initialPopulationSize, [Validators.required]],
            countOfTriesToInsertTile: [properties.countOfTriesToInsertTile, [Validators.required]],
            countOfTrianglePositionDraws: [properties.countOfTrianglePositionDraws, [Validators.required]],
            countOfColorMatchingAttempts: [properties.countOfColorMatchingAttempts, [Validators.required]],
            iterationsCount: [properties.iterationsCount, [Validators.required]],
            populationSize: [properties.populationSize, [Validators.required]],
        });
    }

    private generateEvaluationParamsForm(properties: SectorSchemaEvaluationParams): FormGroup {
        return this.fb.group({
            singleSectionPopulation: [properties.singleSectionPopulation, [Validators.required]],
            overlappingAreaOutsideSector: [properties.overlappingAreaOutsideSector, [Validators.required]],
            additionalPopulationOfNeighboringSectors: [properties.additionalPopulationOfNeighboringSectors, [Validators.required]],
            overlappingNotPopulatedSections: [properties.overlappingNotPopulatedSections, [Validators.required]],
            tileColorMismatch: [properties.tileColorMismatch, [Validators.required]],
        });
    }

    private navigateToSectorList(): void {
        this.router.navigate([`/tool/sectors`]);
    }

    protected cancel(): void {
        this.service.emitEditedSectorProperty(null);
        this.navigateToSectorList();
    }

    protected save(): void {
        if (this.sectorPropertyForm.valid) {
            const properties: SectorSchemaProperties = this.getFormData();

            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: { ...this.sector, properties } }));
            this.service.emitEditedSectorProperty(null);
            this.navigateToSectorList();
        }
    }

    private getFormData(): SectorSchemaProperties {
        return {
            sectionMaxArea: this.sectorPropertyForm.controls.sectionMaxArea.value,
            sectionMinAngle: this.sectorPropertyForm.controls.sectionMinAngle.value,
            minTileRadius: this.sectorPropertyForm.controls.minTileRadius.value,
            maxTileRadius: this.sectorPropertyForm.controls.maxTileRadius.value,
            tilesMargin: this.sectorPropertyForm.controls.tileMargin.value,
            evaluationParams: this.getFormEvaluationParams(),
            populationParams: this.getFormPopulationParams(),
        };
    }

    private getFormPopulationParams(): SectorSchemaPopulationParams {
        const populationParamsControls = this.sectorPropertyForm.controls.populationParams.controls;

        return {
            initialPopulationSize: populationParamsControls.initialPopulationSize.value,
            countOfTriesToInsertTile: populationParamsControls.countOfTriesToInsertTile.value,
            countOfTrianglePositionDraws: populationParamsControls.countOfTrianglePositionDraws.value,
            countOfColorMatchingAttempts: populationParamsControls.countOfColorMatchingAttempts.value,
            iterationsCount: populationParamsControls.iterationsCount.value,
            populationSize: populationParamsControls.populationSize.value,
        };
    }

    private getFormEvaluationParams(): SectorSchemaEvaluationParams {
        const evaluationParamsControls = this.sectorPropertyForm.controls.evaluationParams.controls;

        return {
            singleSectionPopulation: evaluationParamsControls.singleSectionPopulation.value,
            overlappingAreaOutsideSector: evaluationParamsControls.overlappingAreaOutsideSector.value,
            additionalPopulationOfNeighboringSectors: evaluationParamsControls.additionalPopulationOfNeighboringSectors.value,
            overlappingNotPopulatedSections: evaluationParamsControls.overlappingNotPopulatedSections.value,
            tileColorMismatch: evaluationParamsControls.tileColorMismatch.value,
        };
    }

    protected getTriangulationMesh(): void {
        const sectorTriangulationRequestData: SectorTriangulationRequestModel = {
            polygonVertices: this.sector.vertices,
            sectionMaxArea: this.sectorPropertyForm.controls.sectionMaxArea.value,
            sectionMinAngle: this.sectorPropertyForm.controls.sectionMinAngle.value,
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
    }

    private showPolygonTriangulationError(): void {
        this.snackBar.open(
            this.translate.instant('tool.sectors.sectorProperty.errorOnSectorMeshRequesting'),
            this.translate.instant('common.ok'), 
            { duration: 2000 }
        );
    }
}
