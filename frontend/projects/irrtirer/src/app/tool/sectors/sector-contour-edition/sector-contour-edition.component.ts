import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, signal, WritableSignal } from '@angular/core';
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
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { nonUniqueValueValidator } from '../../../core/validators/unique-value.validator';
import { polygonValidator } from './polygon.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

    protected selectedVertexSignal: WritableSignal<Vector> = signal(null);

    protected sectorForm: FormGroup;

    constructor(
        private store: Store,
        private snackbarService: MatSnackBar,
        private service: SectorsContoursService,
        protected translate: TranslateService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private destroyRef: DestroyRef,
        private changeDetector: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.prepareSector();
        this.initForm();
        this.subscribeOnCanvasClicked();
        this.emitContourPreviewChanged();
    }

    private subscribeOnCanvasClicked(): void {
        this.service.canvasClicked$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((vector) => this.addVertex(new Vector(vector.x, vector.y)));
    }

    private prepareSector(): void {
        const sectorId: string = this.route.snapshot.paramMap.get('id');
        if (sectorId) {
            this.sector = this.store.selectSignal(selectSectors)().find(s => s.id === sectorId);
            this.selectedVertexSignal.set(this.sector.vertices.at(0));
        } else {
            this.sector = SectorsContoursService.createNewSector();
        }
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

        this.sectorForm.statusChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.changeDetector.markForCheck());
    }

    private addVertex(vertex: Vector): void {
        const vertices: Vector[] = [...this.sectorForm.value.vertices];
        const indexOfSelectedVertex: number = vertices.indexOf(this.selectedVertexSignal());
        vertices.splice(indexOfSelectedVertex + 1, 0, vertex);

        this.sectorForm.get('vertices').setValue(vertices);
        this.selectedVertexSignal.set(vertex);
        this.emitContourPreviewChanged();
    }

    public removeVertex(vertex: Vector): void {
        const vertices: Vector[] = this.sectorForm.value.vertices.filter((x) => x !== vertex);

        this.sectorForm.get('vertices').setValue(vertices);
        if (vertex === this.selectedVertexSignal()) {
            this.resetSelectedVertex();
        }

        this.emitContourPreviewChanged();
    }

    protected navigateToSectorList(): void {
        this.router.navigate([`/tool/sectors`]);
    }

    protected cancel(): void {
        this.service.emitEditedSectorContour(null);
        this.navigateToSectorList();
    }

    protected save(): void {
        if (this.sectorForm.valid) {
            this.store.dispatch(MosaicProjectActions.sectorModified({ modifiedSector: this.getUpdatedSectorModel() }));
            this.service.emitEditedSectorContour(null);
            this.navigateToSectorList();
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
        this.selectedVertexSignal.set(vertex);
        this.emitContourPreviewChanged();
    }

    protected onColorChanged(): void {
        this.emitContourPreviewChanged();
    }

    protected dropVertexBox(event: CdkDragDrop<string[]>): void {
        const vertices: Vector[] = this.sectorForm.value.vertices;
        moveItemInArray(vertices, event.previousIndex, event.currentIndex);
        this.sectorForm.get('vertices').setValue(vertices);

        this.emitContourPreviewChanged();
    }

    protected getVertexLabel(vertex: Vector): string {
        return `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`;
    }

    private resetSelectedVertex(): void {
        const vertices: Vector[] = this.sectorForm.value.vertices;
        this.selectedVertexSignal.set(vertices.length ? vertices.at(-1) : null);
    }

    private emitContourPreviewChanged(): void {
        this.service.emitEditedSectorContour({
            sector: this.getUpdatedSectorModel(),
            selectedVertex: this.selectedVertexSignal(),
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
