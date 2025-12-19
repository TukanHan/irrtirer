import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MosaicConfig, MosaicProjectModel } from '../../../core/models/mosaic-project.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { selectMosaicConfig } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';
import { FormHelper } from '../../../core/helpers/form-helper/form-helper';

const MIN_WIDTH: number = 1;
const MAX_WIDTH: number = 1000;

interface ProjectConfigForm {
    mosaicWidth: FormControl<number>;
    mosaicImage: FormControl<File | null>;
}

@Component({
    selector: 'app-config-project',
    imports: [TranslateModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    templateUrl: './config-project.component.html',
    styleUrl: './config-project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigProjectComponent implements OnInit {
    private readonly fb = inject(FormBuilder);

    private readonly destroyRef = inject(DestroyRef);

    private readonly snackBar = inject(MatSnackBar);

    private readonly router = inject(Router);

    private readonly configService = inject(ConfigurationService);

    private readonly store = inject(Store);

    private readonly translate = inject(TranslateService);

    protected readonly mosaicConfig = this.store.selectSignal<MosaicConfig | null>(selectMosaicConfig);

    private readonly errorLabels: Record<string, () => string> = {
        min: () => this.translate.instant('tool.config.project.mosaicMinWidthErrorMessage', { width: MIN_WIDTH }),
        max: () => this.translate.instant('tool.config.project.mosaicMaxWidthErrorMessage', { width: MAX_WIDTH }),
        required: () => this.translate.instant('tool.config.project.mosaicWidthRequiredErrorMessage'),
    };

    protected projectForm!: FormGroup<ProjectConfigForm>;

    public ngOnInit(): void {
        this.buildProjectForm();

        if (this.isReadOnlyMode()) {
            this.projectForm.disable();
        } else {
            this.subscribeOnFormValueChanged();
        }
    }

    private buildProjectForm(): void {
        this.projectForm = this.fb.group<ProjectConfigForm>({
            mosaicWidth: this.fb.nonNullable.control(this.mosaicConfig()?.mosaicWidth ?? 100, {
                validators: [Validators.required, Validators.min(MIN_WIDTH), Validators.max(MAX_WIDTH)],
            }),
            mosaicImage: this.fb.control(null, { validators: [Validators.required] }),
        });
    }

    private subscribeOnFormValueChanged(): void {
        this.projectForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((valueChange) => {
            if (this.projectForm.valid) {
                const reader = new FileReader();
                reader.readAsDataURL(valueChange.mosaicImage!);
                reader.onload = (readingEvent: ProgressEvent<FileReader>) => {
                    this.configService.emitImageChange(
                        {
                            base64Image: readingEvent?.target?.result as string,
                            mosaicWidth: valueChange.mosaicWidth!,
                        },
                        true
                    );
                };
            } else {
                this.configService.emitImageChange(null, false);
            }
        });
    }

    protected navigateToConfiguration(): void {
        this.router.navigate(['/tool/config']);
    }

    protected trySave(): void {
        if (this.projectForm.valid) {
            this.save();
        } else {
            const errorMessage: string = this.getErrorMessage();
            this.snackBar.open(errorMessage, this.translate.instant('common.ok'), { duration: 2000 });
        }
    }

    private save(): void {
        const projectFromValue = this.projectForm.getRawValue();

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

    private getErrorMessage(): string {
        if (!this.projectForm.controls.mosaicImage.valid) {
            return this.translate.instant('tool.config.project.selectImageErrorMessage');
        } else if (!this.projectForm.controls.mosaicWidth.valid) {
            return this.getErrorLabel(this.projectForm.controls.mosaicWidth);
        }

        return '';
    }

    protected getErrorLabel(control: AbstractControl): string {
        return FormHelper.getErrorLabel(control, this.errorLabels);
    }

    protected onImageSelected(event: Event): void {
        const target = event.target as HTMLInputElement;
        const file = target.files?.item(0);
        this.projectForm.patchValue({ mosaicImage: file });
    }

    protected isReadOnlyMode(): boolean {
        return !!this.mosaicConfig();
    }
}
