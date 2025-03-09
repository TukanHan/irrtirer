import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, signal, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconSvgModuleModule } from '../core/icon-svg-module/icon-svg-module.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { UserPreferencesActions } from '../core/state/user-preferences/user-preferences.actions';

@Component({
    selector: 'app-toolbar',
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterLink,
        RouterLinkActive,
        IconSvgModuleModule,
        MatMenuModule,
        MatRadioModule,
        CommonModule,
        TranslateModule,
    ],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
    protected selectedLanguageSignal: WritableSignal<string> = signal(this.translate.currentLang);

    constructor(private translate: TranslateService, private destroyRef: DestroyRef, private store: Store) {}

    public ngOnInit(): void {
        this.translate.onLangChange
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((languageChange) => this.selectedLanguageSignal.set(languageChange.lang));
    }

    public languageChanged(selected: MatRadioChange): void {
        this.translate.use(selected.value);
        this.store.dispatch(UserPreferencesActions.languageChanged({ lang: selected.value }));
    }
}
