import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
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
import { GeneratedTilesSet } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { form, max, min, required, Field, validate, customError, FieldState } from '@angular/forms/signals';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';

interface RandomTileSetModel {
    name: string;
    minRadius?: number;
    maxRadius?: number;
    count?: number;
}

@Component({
    selector: 'app-random-tiles',
    imports: [MatFormFieldModule, MatInputModule, TranslateModule, MatButtonModule, MatAutocompleteModule, Field],
    templateUrl: './random-tiles.component.html',
    styleUrl: './random-tiles.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTilesComponent {
    private readonly router = inject(Router);

    private readonly store = inject(Store);

    private readonly snackBar = inject(MatSnackBar);

    private readonly translate = inject(TranslateService);

    private readonly tilesSetsSignal = this.store.selectSignal(selectTilesSets);

    protected readonly seriesNamesSignal = computed<string[]>(() => this.tilesSetsSignal().map((tileSet) => tileSet.name));

    private readonly errorLabels: Record<string, () => string> = {
        min: () => this.translate.instant('tool.tiles.random.radiusTooSmall'),
        max: () => this.translate.instant('tool.tiles.random.radiusTooLarge'),
        required: () => this.translate.instant('tool.tiles.random.fieldRequired'),
        minGreaterThenMax: () => this.translate.instant('tool.tiles.random.maxRadiusLargerThanMin'),
    };

    private readonly formData = signal<RandomTileSetModel>({
        name: '',
        minRadius: null,
        maxRadius: null,
        count: null,
    });

    protected readonly form = form(this.formData, (schemaPath) => {
        required(schemaPath.name);

        required(schemaPath.minRadius);
        min(schemaPath.minRadius, 0.01);
        max(schemaPath.minRadius, 1000);

        required(schemaPath.maxRadius);
        min(schemaPath.maxRadius, 0.01);
        max(schemaPath.maxRadius, 1000);
        validate(schemaPath.maxRadius, ({ value, valueOf }) => {
            if (value() < valueOf(schemaPath.minRadius)) {
                return customError({ kind: 'minGreaterThenMax' });
            }

            return null;
        });

        required(schemaPath.count, { message: this.translate.instant('tool.tiles.random.fieldRequired') });
    });

    protected getFieldErrorLabel(field: FieldState<unknown>): string {
        return FormHelper.getFieldErrorLabel(field, this.errorLabels);
    }

    public async getTileSet(): Promise<void> {
        if (this.form().valid()) {
            const formData = this.formData();
            const tileGenerator: TileGenerator = new TileGenerator(await this.getImagePixelArray());
            const tilesSet: GeneratedTilesSet = {
                name: formData.name,
                source: 'generated',
                tiles: tileGenerator.generateTileSet({ min: formData.minRadius, max: formData.maxRadius }, formData.count),
                minRadius: formData.minRadius,
                maxRadius: formData.maxRadius
            };

            this.snackBar.open(this.translate.instant('tool.tiles.random.tilesSeriesGenerated'), this.translate.instant('common.ok'), {
                duration: 3000,
            });
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
