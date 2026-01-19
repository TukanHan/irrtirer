import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MosaicProjectModel } from '../../../core/models/mosaic-project.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { selectMosaicConfig } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';
import { disabled, Field, FieldState, form, max, min, required } from '@angular/forms/signals';

const MIN_WIDTH: number = 1;
const MAX_WIDTH: number = 1000;

interface ProjectConfigForm {
    mosaicWidth: number;
    mosaicImage: File | null;
}

@Component({
    selector: 'app-config-project',
    imports: [TranslateModule, MatButtonModule, MatFormFieldModule, MatInputModule, Field],
    templateUrl: './config-project.component.html',
    styleUrl: './config-project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigProjectComponent {
    private readonly snackBar = inject(MatSnackBar);

    private readonly router = inject(Router);

    private readonly configService = inject(ConfigurationService);

    private readonly store = inject(Store);

    private readonly translate = inject(TranslateService);

    protected readonly mosaicConfig = this.store.selectSignal(selectMosaicConfig);

    protected readonly isReadOnlyMode = computed<boolean>(() => !!this.mosaicConfig());

    private readonly errorLabels: Record<string, () => string> = {
        min: () => this.translate.instant('tool.config.project.mosaicMinWidthErrorMessage', { width: MIN_WIDTH }),
        max: () => this.translate.instant('tool.config.project.mosaicMaxWidthErrorMessage', { width: MAX_WIDTH }),
        required: () => this.translate.instant('tool.config.project.mosaicWidthRequiredErrorMessage'),
    };

    private readonly formData = signal<ProjectConfigForm>({
        mosaicWidth: this.mosaicConfig()?.mosaicWidth ?? 100,
        mosaicImage: null,
    });

    protected form = form<ProjectConfigForm>(this.formData, (schemaPath) => {
        required(schemaPath.mosaicWidth);
        min(schemaPath.mosaicWidth, MIN_WIDTH);
        max(schemaPath.mosaicWidth, MAX_WIDTH);
        disabled(schemaPath.mosaicWidth, () => this.isReadOnlyMode());

        required(schemaPath.mosaicImage);
    });

    protected readonly formValueChangedEffect = effect(() => {
        if (this.form().valid()) {
            const reader = new FileReader();
            reader.readAsDataURL(this.form.mosaicImage().value()!);
            reader.onload = (readingEvent: ProgressEvent<FileReader>) => {
                this.configService.emitImageChange(
                    {
                        base64Image: readingEvent?.target?.result as string,
                        mosaicWidth: this.form.mosaicWidth().value(),
                    },
                    true,
                );
            };
        } else {
            this.configService.emitImageChange(null, false);
        }
    });

    protected navigateToConfiguration(): void {
        this.router.navigate(['/tool/config']);
    }

    protected trySave(): void {
        if (this.form().valid()) {
            this.save();
        } else {
            const errorMessage = this.getErrorMessage();
            this.snackBar.open(errorMessage!, this.translate.instant('common.ok'), { duration: 2000 });
        }
    }

    private save(): void {
        const projectFromValue = this.formData();

        const reader = new FileReader();
        reader.readAsDataURL(projectFromValue.mosaicImage!);
        reader.onload = (readingEvent: ProgressEvent<FileReader>) => {
            const image: string = readingEvent?.target?.result as string;
            const project: MosaicProjectModel = {
                config: {
                    base64Image: image,
                    mosaicWidth: projectFromValue.mosaicWidth,
                },
                tilesSets: [],
                sectors: [],
            };

            this.createNewProject(project);
            this.snackBar.open(this.translate.instant('tool.config.project.projectCreated'), this.translate.instant('common.ok'), { duration: 2000 });
            this.navigateToConfiguration();
        };
    }

    private createNewProject(project: MosaicProjectModel): void {
        this.store.dispatch(MosaicProjectActions.projectCreated({ project }));
    }

    private getErrorMessage(): string | null {
        if (!this.form.mosaicImage().valid()) {
            return this.translate.instant('tool.config.project.selectImageErrorMessage');
        } else if (!this.form.mosaicWidth().valid()) {
            return this.getFieldErrorLabel(this.form.mosaicWidth());
        }

        return null;
    }

    protected getFieldErrorLabel(field: FieldState<unknown>): string {
        return FormHelper.getFieldErrorLabel(field, this.errorLabels);
    }

    protected onImageSelected(event: Event): void {
        const target = event.target as HTMLInputElement;
        const file = target.files?.item(0) ?? null;
        this.formData.update((state) => ({ ...state, mosaicImage: file }));
    }
}
