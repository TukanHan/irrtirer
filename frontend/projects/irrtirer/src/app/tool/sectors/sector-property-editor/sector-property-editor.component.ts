import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectorsContoursService } from '../sectors-contours.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
    SectorSchema,
    SectorSchemaEvaluationParams,
    SectorSchemaPopulationParams,
    SectorSchemaProperties,
} from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { ExtendedPanelComponent } from './extended-panel/extended-panel.component';
import { DataService } from '../../../core/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SectorTriangulationRequestModel } from '../../../core/models/api/api.models';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-sector-property-editor',
    imports: [
        MatButtonModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        ReactiveFormsModule,
        ExtendedPanelComponent,
        TranslateModule,
    ],
    templateUrl: './sector-property-editor.component.html',
    styleUrl: './sector-property-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectorPropertyEditorComponent implements OnInit {
    private sector: SectorSchema = null;

    protected sectorPropertyForm: FormGroup;

    constructor(
        private store: Store,
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private snackBar: MatSnackBar,
        private service: SectorsContoursService,
        protected translate: TranslateService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.prepareSector();
        this.sectorPropertyForm = this.generateForm(this.sector.properties);
        this.getTriangulationMesh();
    }

    private prepareSector(): void {
        const sectorId: string = this.route.snapshot.paramMap.get('id');
        if (sectorId) {
            this.sector = this.store.selectSignal(selectSectors)().find(s => s.id === sectorId);
        }
    }

    private generateForm(properties: SectorSchemaProperties): FormGroup {
        return this.formBuilder.group({
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
        return this.formBuilder.group({
            initialPopulationSize: [properties.initialPopulationSize, [Validators.required]],
            countOfTriesToInsertTile: [properties.countOfTriesToInsertTile, [Validators.required]],
            countOfTrianglePositionDraws: [properties.countOfTrianglePositionDraws, [Validators.required]],
            countOfColorMatchingAttempts: [properties.countOfColorMatchingAttempts, [Validators.required]],
            iterationsCount: [properties.iterationsCount, [Validators.required]],
            populationSize: [properties.populationSize, [Validators.required]],
        });
    }

    private generateEvaluationParamsForm(properties: SectorSchemaEvaluationParams): FormGroup {
        return this.formBuilder.group({
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
            sectionMaxArea: this.sectorPropertyForm.get('sectionMaxArea').value,
            sectionMinAngle: this.sectorPropertyForm.get('sectionMinAngle').value,
            minTileRadius: this.sectorPropertyForm.get('minTileRadius').value,
            maxTileRadius: this.sectorPropertyForm.get('maxTileRadius').value,
            tilesMargin: this.sectorPropertyForm.get('tileMargin').value,
            evaluationParams: this.getFormEvaluationParams(),
            populationParams: this.getFormPopulationParams(),
        };
    }

    private getFormPopulationParams(): SectorSchemaPopulationParams {
        return {
            initialPopulationSize: this.sectorPropertyForm.get('populationParams.initialPopulationSize').value,
            countOfTriesToInsertTile: this.sectorPropertyForm.get('populationParams.countOfTriesToInsertTile').value,
            countOfTrianglePositionDraws: this.sectorPropertyForm.get('populationParams.countOfTrianglePositionDraws').value,
            countOfColorMatchingAttempts: this.sectorPropertyForm.get('populationParams.countOfColorMatchingAttempts').value,
            iterationsCount: this.sectorPropertyForm.get('populationParams.iterationsCount').value,
            populationSize: this.sectorPropertyForm.get('populationParams.populationSize').value,
        };
    }

    private getFormEvaluationParams(): SectorSchemaEvaluationParams {
        return {
            singleSectionPopulation: this.sectorPropertyForm.get('evaluationParams.singleSectionPopulation').value,
            overlappingAreaOutsideSector: this.sectorPropertyForm.get('evaluationParams.overlappingAreaOutsideSector').value,
            additionalPopulationOfNeighboringSectors: this.sectorPropertyForm.get('evaluationParams.additionalPopulationOfNeighboringSectors').value,
            overlappingNotPopulatedSections: this.sectorPropertyForm.get('evaluationParams.overlappingNotPopulatedSections').value,
            tileColorMismatch: this.sectorPropertyForm.get('evaluationParams.tileColorMismatch').value,
        };
    }

    protected getTriangulationMesh(): void {
        const sectorTriangulationRequestData: SectorTriangulationRequestModel = {
            polygonVertices: this.sector.vertices,
            sectionMaxArea: this.sectorPropertyForm.get('sectionMaxArea').value,
            sectionMinAngle: this.sectorPropertyForm.get('sectionMinAngle').value,
        };

        this.dataService.getPolygonTriangulationMesh(sectorTriangulationRequestData).subscribe({
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
