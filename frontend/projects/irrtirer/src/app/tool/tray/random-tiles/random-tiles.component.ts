import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { selectMosaicImage, selectTilesSets } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TileGenerator } from './tile-generator';
import { ImageHelper } from '../../../core/helpers/image-helper';
import { GeneratedTilesSet, TilesSet } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { form, max, min, required, Field, validate, customError, FieldState, submit } from '@angular/forms/signals';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

interface RandomTileSetModel {
    name: string;
    minRadius: number | null;
    maxRadius: number | null;
    count: number | null;
}

@Component({
    selector: 'app-random-tiles',
    imports: [MatFormFieldModule, MatInputModule, TranslateModule, MatButtonModule, MatAutocompleteModule, Field],
    templateUrl: './random-tiles.component.html',
    styleUrl: './random-tiles.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTilesComponent implements OnInit {
    private readonly router = inject(Router);

    private readonly route = inject(ActivatedRoute);

    private readonly store = inject(Store);

    private readonly snackBar = inject(MatSnackBar);

    private readonly translate = inject(TranslateService);

    private readonly dialog = inject(MatDialog);

    private readonly tilesSetsSignal = this.store.selectSignal(selectTilesSets);

    protected readonly existingSeriesNames = computed<string[]>(() =>
        this.tilesSetsSignal()
            .filter((tileSet) => tileSet.source === 'generated')
            .map((tileSet) => tileSet.name),
    );

    protected readonly immutableSeriesNames = computed<string[]>(() =>
        this.tilesSetsSignal()
            .filter((tileSet) => tileSet.source !== 'generated')
            .map((tileSet) => tileSet.name),
    );

    private readonly errorLabels: Record<string, () => string> = {
        min: () => this.translate.instant('tool.tiles.random.radiusTooSmall'),
        max: () => this.translate.instant('tool.tiles.random.radiusTooLarge'),
        required: () => this.translate.instant('common.fieldRequired'),
        minGreaterThenMax: () => this.translate.instant('tool.tiles.random.maxRadiusLargerThanMin'),
        cannotNowOverrideOtherTilesSet: () => this.translate.instant('tool.tiles.random.cannotNowOverrideOtherTilesSet'),
        cannotOverrideTilesSet: () => this.translate.instant('tool.tiles.random.cannotOverrideTilesSet'),
    };

    private readonly formData = signal<RandomTileSetModel>({
        name: '',
        minRadius: null,
        maxRadius: null,
        count: null,
    });

    private editedTilesSet: GeneratedTilesSet | null = null;

    protected readonly form = form(this.formData, (schemaPath) => {
        required(schemaPath.name);
        validate(schemaPath.name, ({ value }) => {
            if (this.immutableSeriesNames().includes(value())) {
                return customError({ kind: 'cannotOverrideTilesSet' });
            }

            return null;
        });
        validate(schemaPath.name, ({ value }) => {
            if (this.editedTilesSet) {
                const nameAlreadyUsed = this.existingSeriesNames()
                    .some((name) => name === value() && name !== this.editedTilesSet!.name);

                if (nameAlreadyUsed) {
                    return customError({ kind: 'cannotNowOverrideOtherTilesSet' });
                }
            }

            return null;
        });

        required(schemaPath.minRadius);
        min(schemaPath.minRadius, 0.01);
        max(schemaPath.minRadius, 1000);

        required(schemaPath.maxRadius);
        min(schemaPath.maxRadius, 0.01);
        max(schemaPath.maxRadius, 1000);
        validate(schemaPath.maxRadius, ({ value, valueOf }) => {
            if (Number(value()) < Number(valueOf(schemaPath.minRadius))) {
                return customError({ kind: 'minGreaterThenMax' });
            }

            return null;
        });

        required(schemaPath.count);
    });

    public ngOnInit(): void {
        const tileSetId = this.route.snapshot.paramMap.get('id');
        if (tileSetId) {
            this.initFormForEditedTilesSet(tileSetId);
        }
    }

    private initFormForEditedTilesSet(tileSetId: string): void {
        const tilesSet = this.tilesSetsSignal().find((s) => s.id === tileSetId);
        if (tilesSet && this.isGeneratedTilesSet(tilesSet)) {
            this.editedTilesSet = tilesSet;
            this.formData.set({
                name: tilesSet.name,
                count: tilesSet.tiles.length,
                minRadius: tilesSet.minRadius,
                maxRadius: tilesSet.maxRadius,
            });
        }
    }

    protected getFieldErrorLabel(field: FieldState<unknown>): string | null {
        return FormHelper.getFieldErrorLabel(field, this.errorLabels);
    }

    protected trySaveTileSet(): void {
        submit(this.form, async () => {
            const editedTileSetId = this.getIdOfEditedTilesSet();
            if (editedTileSetId) {
                this.openWarningDialog().subscribe(async (result) => {
                    if (result) {
                        await this.saveTileSet(editedTileSetId);
                    }
                });
            } else {
                await this.saveTileSet(null);
            }
        });
    }

    private getIdOfEditedTilesSet(): string | null {
        const { name } = this.formData();
        return this.editedTilesSet?.id ?? this.getTileSetByName(name)?.id ?? null;
    }

    private getTileSetByName(name: string): GeneratedTilesSet | null {
        if (this.existingSeriesNames().includes(name)) {
            return this.tilesSetsSignal()
                .filter((tileSet) => this.isGeneratedTilesSet(tileSet))
                .find((tilesSet) => tilesSet.name === name)!;
        }

        return null;
    }

    private async saveTileSet(originalId: string | null): Promise<void> {
        this.snackBar.open(this.translate.instant('tool.tiles.random.tilesSeriesGenerated'), this.translate.instant('common.ok'), {
            duration: 3000,
        });
        this.store.dispatch(MosaicProjectActions.tilesSetCommitted({
            tilesSet: await this.buildTileSet(originalId) 
        }));
        
        this.navigateToMenu();
    }

    private async buildTileSet(originalId: string | null): Promise<GeneratedTilesSet> {
        const { name, minRadius, maxRadius, count } = this.formData();
            
        const min = Number(minRadius);
        const max = Number(maxRadius);
        const tileGenerator = new TileGenerator(await this.getImagePixelArray());

        return {
            id: originalId ?? crypto.randomUUID(),
            name,
            source: 'generated',
            tiles: tileGenerator.generateTileSet({ min, max }, Number(count)),
            minRadius: min,
            maxRadius: max,
        };
    }

    private async getImagePixelArray(): Promise<Uint8ClampedArray> {
        const imageSrc = this.store.selectSignal(selectMosaicImage)();
        return ImageHelper.getImageSrcPixelArray(imageSrc);
    }

    protected navigateToMenu(): void {
        this.router.navigate(['/tool/tray']);
    }

    private isGeneratedTilesSet(tilesSet: TilesSet): tilesSet is GeneratedTilesSet {
        return tilesSet.source === 'generated';
    }

    private openWarningDialog(): Observable<boolean> {
        const dialogData: DialogData = {
            title: this.translate.instant('common.warning'),
            message: this.translate.instant('tool.tiles.random.overrideTileSetWarning'),
        };

        return this.dialog.open(DialogComponent, { data: dialogData }).afterClosed();
    }
}
