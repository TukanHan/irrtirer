import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { MosaicConfig } from '../../../core/models/mosaic-project.model';
import { selectMosaicConfig } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { ConfigurationService } from '../configuration.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProjectImportService } from '../../shared/project-import.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectNameDialogComponent, ProjectNameDialogData } from '../project-name-dialog/project-name-dialog.component';
import { openFilePicker } from '../../../core/helpers/download-helper';

const DEFAULT_PROJECT_NAME: string = "irrtirer_project";

@Component({
    selector: 'app-config-menu',
    imports: [MatButtonModule, TranslateModule],
    templateUrl: './config-menu.component.html',
    styleUrl: './config-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigMenuComponent {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    protected readonly mosaicConfig = this.store.selectSignal<MosaicConfig>(selectMosaicConfig);

    private readonly dialog = inject(MatDialog);

    private readonly router = inject(Router);

    private readonly configService = inject(ConfigurationService);

    private readonly projectImportService = inject(ProjectImportService);

    private readonly destroyRef = inject(DestroyRef);

    private readonly snackBar = inject(MatSnackBar);

    protected navigateToProjectConfiguration(): void {
        this.router.navigate(['/tool/config/project']);
    }

    protected rejectProject(): void {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.config.menu.rejectProject'),
            message: this.translate.instant('tool.config.menu.rejectProjectWarning'),
        };

        this.dialog
            .open(DialogComponent, { data: dialogData })
            .afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.projectCanceled());
                    this.configService.emitImageChange(null, false);
                }
            });
    }

    protected saveProject(): void {
        const dialogRef = this.dialog.open<ProjectNameDialogComponent, ProjectNameDialogData, string>(ProjectNameDialogComponent, {
            data: { defaultName: DEFAULT_PROJECT_NAME },
        });
        dialogRef.afterClosed().subscribe((projectName: string | undefined) => {
            if (projectName) {
                this.projectImportService.saveProject(projectName);
                const message = this.translate.instant('tool.config.menu.projectSavedMessage', { projectName });
                this.snackBar.open(message, this.translate.instant('common.ok'), { duration: 3000 });
            }
        });
    }

    protected loadNewProject(): void {
        if (this.mosaicConfig()) {
            this.confirmDiscardAndLoadNewProject();
        } else {
            this.selectProjectToLoad();
        }
    }

    private confirmDiscardAndLoadNewProject(): void {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.config.menu.loadProjectDialogTitle'),
            message: this.translate.instant('tool.config.menu.loadProjectDialogMessage'),
        };

        this.dialog
            .open(DialogComponent, { data: dialogData })
            .afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                if (result) {
                    this.selectProjectToLoad();
                }
            });
    }

    private selectProjectToLoad(): void {
        const action = (file: File): void => {
            this.projectImportService.loadProject(file)
                .then((project) => {
                    this.store.dispatch(MosaicProjectActions.projectCreated({ project }));
                    this.configService.emitImageChange(project.config, true);
                }).catch(() => {
                    this.snackBar.open(this.translate.instant('tool.config.menu.loadProjectError'),);
                });
        };

        openFilePicker('.irr', action);
    }
}
