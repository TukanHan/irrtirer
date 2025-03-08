import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
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

@Component({
    selector: 'app-config-menu',
    imports: [MatButtonModule, TranslateModule],
    templateUrl: './config-menu.component.html',
    styleUrl: './config-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigMenuComponent {
    protected mosaicConfigSignal: Signal<MosaicConfig> = this.store.selectSignal(selectMosaicConfig);

    constructor(
        private router: Router,
        private translate: TranslateService,
        private store: Store,
        private dialog: MatDialog,
        private configService: ConfigurationService
    ) {}

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
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.projectCanceled());
                    this.configService.emitImageChange(null, false);
                }
            });
    }
}
