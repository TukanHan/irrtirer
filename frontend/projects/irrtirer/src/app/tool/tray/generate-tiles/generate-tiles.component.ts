import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { selectMosaicImage } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { Store } from '@ngrx/store';
import { ImageHelper } from '../../../core/helpers/image-helper';
import { TileGenerator } from './tile-generator';

@Component({
    selector: 'app-generate-tiles',
    imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule],
    templateUrl: './generate-tiles.component.html',
    styleUrl: './generate-tiles.component.scss'
})
export class GenerateTilesComponent {
    @Output()
    tileSetGenerated$: EventEmitter<TilesSet> = new EventEmitter();

    tileSetGenerationForm: FormGroup;

    errorLabels: { [key: string]: string } = {
        min: 'Wartość zbyt niska',
        required: 'Pole wymagane',
        minGreaterThenMax: 'Minimalny promień jest większy niż maksymalny',
    };

    constructor(private store: Store, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
        this.tileSetGenerationForm = this.createForm();
    }

    createForm(): FormGroup {
        const form = this.formBuilder.group({
            name: [null, [Validators.required]],
            minRadius: [null, [Validators.required, Validators.min(0.01)]],
            maxRadius: [null, [Validators.required, Validators.min(0.01)]],
            count: [null, [Validators.required, Validators.min(1)]],
        });
        form.setValidators(this.comparisonValidator('minRadius', 'maxRadius'));

        return form;
    }

    comparisonValidator(minKey: string, maxKey: string): ValidatorFn {
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

    getErrorLabel(control: AbstractControl): string {
        if (control.errors) {
            for (const key of Object.keys(control.errors)) {
                if (control.errors[key] && key in this.errorLabels) {
                    return this.errorLabels[key];
                }
            }
        }

        return null;
    }

    public async getTileSet(): Promise<void> {
        this.tileSetGenerationForm.markAllAsTouched();
        if (this.tileSetGenerationForm.valid) {
            const formData: { minRadius: number; maxRadius: number; count: number; name: string } =
                this.tileSetGenerationForm.getRawValue();

            const tileGenerator: TileGenerator = new TileGenerator(await this.getImagePixelArray());
            const tileSet: TilesSet = {
                name: formData.name,
                tiles: tileGenerator.generateTileSet({ min: formData.minRadius, max: formData.maxRadius }, formData.count),
            };

            this.snackBar.open($localize`Seria kafelków wygenerowana`, 'Ok', { duration: 3000 });
            this.tileSetGenerated$.next(tileSet);
            this.tileSetGenerationForm.reset();
        }
    }

    async getImagePixelArray(): Promise<Uint8ClampedArray> {
        const imageSrc = this.store.selectSignal(selectMosaicImage)();
        return ImageHelper.getImageSrcPixelArray(imageSrc);
    }
}
