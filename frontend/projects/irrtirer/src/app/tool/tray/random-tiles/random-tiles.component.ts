import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { selectMosaicImage, selectTilesSets } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TileGenerator } from './tile-generator';
import { ImageHelper } from '../../../core/helpers/image-helper';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';

@Component({
    selector: 'app-random-tiles',
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslateModule, MatButtonModule, MatAutocompleteModule],
    templateUrl: './random-tiles.component.html',
    styleUrl: './random-tiles.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTilesComponent implements OnInit {
    protected formGroup: FormGroup;

    protected seriesNamesSignal: WritableSignal<string[]> = signal([]);

    private errorLabels: { [key: string]: () => string } = {
        min: () => this.translate.instant('tool.tiles.random.radiusTooSmall'),
        max: () => this.translate.instant('tool.tiles.random.radiusTooLarge'),
        required: () => this.translate.instant('tool.tiles.random.fieldRequired'),
        minGreaterThenMax: () => this.translate.instant('tool.tiles.random.maxRadiusLargerThanMin'),
    };

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private store: Store,
        private snackBar: MatSnackBar,
        private translate: TranslateService
    ) {}

    public ngOnInit(): void {
        this.initForm();

        const tileSetsNames: string[] = this.store
            .selectSignal(selectTilesSets)()
            .map(tileSet => tileSet.name);

        this.seriesNamesSignal.set(tileSetsNames);
    }

    private initForm(): void {
        this.formGroup = this.formBuilder.group({
            name: [null, [Validators.required]],
            minRadius: [null, [Validators.required, Validators.min(0.01), Validators.max(1000)]],
            maxRadius: [null, [Validators.required, Validators.min(0.01), Validators.max(1000)]],
            count: [null, [Validators.required, Validators.min(1)]],
        });

        this.formGroup.setValidators(this.comparisonValidator('minRadius', 'maxRadius'));
    }

    private comparisonValidator(minKey: string, maxKey: string): ValidatorFn {
        return (group: FormGroup): ValidationErrors => {
            const min = group.controls[minKey];
            const max = group.controls[maxKey];
            if (min.value > max.value) {
                max.setErrors({ minGreaterThenMax: true });
            } else {
                max.setErrors(null);
            }

            return null;
        };
    }

    protected getErrorLabel(control: AbstractControl): string {
        if (control.errors) {
            for (const key of Object.keys(control.errors)) {
                if (control.errors[key] && key in this.errorLabels) {
                    return this.errorLabels[key]();
                }
            }
        }

        return null;
    }

    public async getTileSet(): Promise<void> {
        if (this.formGroup.valid) {
            const formData: { minRadius: number; maxRadius: number; count: number; name: string } = this.formGroup.getRawValue();

            const tileGenerator: TileGenerator = new TileGenerator(await this.getImagePixelArray());
            const tilesSet: TilesSet = {
                name: formData.name,
                tiles: tileGenerator.generateTileSet({ min: formData.minRadius, max: formData.maxRadius }, formData.count),
            };

            this.snackBar.open(this.translate.instant('tool.tiles.random.tilesSeriesGenerated'), this.translate.instant('common.ok'), { duration: 3000 });
            this.store.dispatch(MosaicProjectActions.tilesSetAdded({ tilesSet }));
            this.navigateToMenu();
        }
    }

    private async getImagePixelArray(): Promise<Uint8ClampedArray> {
        const imageSrc = this.store.selectSignal(selectMosaicImage)();
        return ImageHelper.getImageSrcPixelArray(imageSrc);
    }

    protected navigateToMenu(): void {
        this.router.navigate(['/tool/tray']);
    }
}
