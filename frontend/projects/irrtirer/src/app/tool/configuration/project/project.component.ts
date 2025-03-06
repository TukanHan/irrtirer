import { ChangeDetectionStrategy, Component, DestroyRef, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MosaicConfig, MosaicProjectModel } from '../../../core/models/mosaic-project.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';

const MIN_WIDTH: number = 1;
const MAX_WIDTH: number = 1000;

@Component({
    selector: 'app-project',
    imports: [
        TranslateModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
    public closed: OutputEmitterRef<void> = output();

    public imagePreviewChanged: OutputEmitterRef<MosaicConfig> = output<MosaicConfig>();

    public mosaicConfigSignal: InputSignal<MosaicConfig> = input.required({ alias: 'mosaicConfig' });

    protected projectForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private translate: TranslateService,
        private store: Store,
        private destroyRef: DestroyRef,
        private snackBar: MatSnackBar
    ) {}

    public ngOnInit(): void {
        this.buildProjectForm();

        if (this.isReadOnlyMode()) {
            this.projectForm.disable();
        } else {
            this.subscribeOnFormValueChanged();
        }
    }

    private buildProjectForm(): void {
        this.projectForm = this.formBuilder.group({
            mosaicWidth: [
                this.mosaicConfigSignal()?.mosaicWidth ?? 100, 
                [Validators.required, Validators.min(MIN_WIDTH), Validators.max(MAX_WIDTH)]
            ],
            mosaicImage: [null, Validators.required],
        });
    }

    private subscribeOnFormValueChanged(): void {
        this.projectForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((valueChange) => {
            if (this.projectForm.valid) {
                const reader = new FileReader();
                reader.readAsDataURL(valueChange.mosaicImage);
                reader.onload = (readingEvent: ProgressEvent<FileReader>) => {
                    this.imagePreviewChanged.emit({
                        base64Image: readingEvent?.target?.result as string,
                        mosaicWidth: valueChange.mosaicWidth,
                    });
                };
            } else {
                this.imagePreviewChanged.emit(null);
            }
        });
    }

    protected cancel(): void {
        this.closed.emit();
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
        const projectFromValue = this.projectForm.value;

        const reader = new FileReader();
        reader.readAsDataURL(projectFromValue.mosaicImage);
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
            this.closed.emit();
        };
    }

    private createNewProject(project: MosaicProjectModel): void {
        this.store.dispatch(MosaicProjectActions.projectCreated({ project }));
    }

    private getErrorMessage(): string {
        if (!this.projectForm.get('mosaicImage').valid) {
            return this.translate.instant('tool.config.project.selectImageErrorMessage');
        } else if (this.projectForm.get('mosaicWidth').errors['max']) {
            return this.translate.instant('tool.config.project.mosaicMaxWithErrorMessage', { width: MAX_WIDTH });
        } else if (this.projectForm.get('mosaicWidth').errors['min']) {
            return this.translate.instant('tool.config.project.mosaicMinWithErrorMessage', { width: MIN_WIDTH });
        }

        return null;
    }

    protected onImageSelected(event: Event): void {
        const target = event.target as HTMLInputElement;
        const file = target.files?.item(0);
        this.projectForm.patchValue({ mosaicImage: file });
    }

    protected isReadOnlyMode(): boolean {
        return !!this.mosaicConfigSignal();
    }
}
