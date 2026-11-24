import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconSvgModuleModule } from '../core/icon-svg-module/icon-svg-module.module';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { UserPreferencesActions } from '../core/state/user-preferences/user-preferences.actions';
import { ThemeSwitcher } from '../core/services/theme-switcher/theme-switcher';
import { ThemeMode } from '../core/models/user-preferences.interface';
import { TitleCasePipe } from '@angular/common';
import { IdsMenu, IdsMenuTrigger } from 'irr-design-system/menu';
import { IdsFlatButton, IdsFlatLink } from 'irr-design-system/action';

@Component({
    selector: 'app-toolbar',
    imports: [MatIconModule, IconSvgModuleModule, MatRadioModule, TranslatePipe, TitleCasePipe, IdsFlatButton, IdsFlatLink, IdsMenu, IdsMenuTrigger],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
    private readonly translate = inject(TranslateService);

    private readonly themeSwitcher = inject(ThemeSwitcher);

    private readonly destroyRef = inject(DestroyRef);

    private readonly store = inject(Store);

    protected readonly selectedLanguage = signal<string>(this.translate.getCurrentLang() ?? 'pl');

    protected readonly themeMode = toSignal<ThemeMode>(this.themeSwitcher.theme$);

    public ngOnInit(): void {
        this.translate.onLangChange
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((languageChange) => this.selectedLanguage.set(languageChange.lang));
    }

    protected languageChanged(selected: MatRadioChange<string>): void {
        this.translate.use(selected.value);
        this.store.dispatch(UserPreferencesActions.languageChanged({ lang: selected.value }));
    }

    protected toggleTheme(): void {
        const nextState = this.themeMode() === 'dark' ? 'light' : 'dark';
        this.themeSwitcher.changeTheme(nextState);
    }
}
