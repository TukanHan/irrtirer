import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFramedButton } from 'irr-design-system/action';
import { openFilePicker } from '../../../core/helpers/download-helper';
import { ProjectArchive } from '../../../core/services/project-archive/project-archive';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { selectMosaicConfig } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { Dialog } from '../../../shared/dialog/dialog';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { ConfigurationEventBus } from '../configuration-event-bus';
import { ProjectNameDialog, ProjectNameDialogData } from '../project-name-dialog/project-name-dialog';

const DEFAULT_PROJECT_NAME: string = 'irrtirer_project';

@Component({
    selector: 'app-config-menu',
    imports: [TranslatePipe, IdsFramedButton],
    templateUrl: './config-menu.html',
    host: { class: 'flex flex-col gap-2.5' },
})
export class ConfigMenu {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    protected readonly mosaicConfig = this.store.selectSignal(selectMosaicConfig);

    private readonly dialog = inject(MatDialog);

    private readonly router = inject(Router);

    private readonly configEventBus = inject(ConfigurationEventBus);

    private readonly projectArchive = inject(ProjectArchive);

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
            .open(Dialog, { data: dialogData })
            .afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.projectCanceled());
                    this.configEventBus.emitImageChange(null, false);
                }
            });
    }

    protected saveProject(): void {
        const dialogRef = this.dialog.open<ProjectNameDialog, ProjectNameDialogData, string>(ProjectNameDialog, {
            data: { defaultName: DEFAULT_PROJECT_NAME },
        });
        dialogRef.afterClosed().subscribe((projectName: string | undefined) => {
            if (projectName) {
                this.projectArchive.saveProject(projectName);
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
            .open(Dialog, { data: dialogData })
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
            this.projectArchive
                .loadProject(file)
                .then((project) => {
                    this.store.dispatch(MosaicProjectActions.projectCreated({ project }));
                    this.configEventBus.emitImageChange(project.config, true);
                })
                .catch(() => {
                    this.snackBar.open(this.translate.instant('tool.config.menu.loadProjectError'));
                });
        };

        openFilePicker('.irr', action);
    }
}
