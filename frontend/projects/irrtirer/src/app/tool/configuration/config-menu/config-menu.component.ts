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

@Component({
    selector: 'app-config-menu',
    imports: [MatButtonModule, TranslateModule],
    templateUrl: './config-menu.component.html',
    styleUrl: './config-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigMenuComponent {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    protected readonly mosaicConfig = this.store.selectSignal<MosaicConfig>(selectMosaicConfig);

    private readonly dialog = inject(MatDialog);

    private readonly router = inject(Router);

    private readonly configService = inject(ConfigurationService);

    private readonly destroyRef = inject(DestroyRef);

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
}
