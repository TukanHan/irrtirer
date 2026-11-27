import { TitleCasePipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFlatButton, IdsFlatLink } from 'irr-design-system/action';
import { IdsMenu, IdsMenuTrigger } from 'irr-design-system/menu';
import { IconSvgModuleModule } from '../core/icon-svg-module/icon-svg-module.module';
import { ThemeMode } from '../core/models/user-preferences.interface';
import { ThemeSwitcher } from '../core/services/theme-switcher/theme-switcher';
import { UserPreferencesActions } from '../core/state/user-preferences/user-preferences.actions';

@Component({
    selector: 'app-toolbar',
    imports: [MatIconModule, IconSvgModuleModule, MatRadioModule, TranslatePipe, TitleCasePipe, IdsFlatButton, IdsFlatLink, IdsMenu, IdsMenuTrigger],
    template: `
        <ids-flat-link link="/tool" linkType="internal">
            <span class="text-base">{{ 'title' | translate }}</span>
        </ids-flat-link>

        <ids-flat-link link="/project" linkType="internal"> {{ 'aboutProject.header' | translate }} </ids-flat-link>

        <ids-flat-link link="/author" linkType="internal"> {{ 'aboutAuthor.header' | translate }} </ids-flat-link>

        <span class="flex-1"></span>

        <ids-flat-button
            variant="accent"
            class="toolbar-item mode"
            [ariaLabel]="(themeMode() === 'dark' ? 'toolbar.theme.toLight' : 'toolbar.theme.toDark') | translate"
            (clicked)="toggleTheme()"
        >
            <mat-icon class="material-symbols-outlined">{{ themeMode() === 'dark' ? 'dark_mode' : 'light_mode' }}</mat-icon>
        </ids-flat-button>

        <ids-flat-button variant="accent" class="toolbar-item" [idsMenuTriggerFor]="menu">
            <mat-icon>language</mat-icon>
            <span class="block min-w-5">{{ selectedLanguage() | titlecase }}</span>
        </ids-flat-button>

        <ids-menu #menu panelClass="language-panel">
            <mat-radio-group class="lang-radio-group" (change)="languageChanged($event)" [value]="selectedLanguage()">
                <mat-radio-button value="pl" class="lang-radio">
                    {{ 'toolbar.languages.polish' | translate }}
                    <mat-icon svgIcon="pl" />
                </mat-radio-button>
                <mat-radio-button value="en" class="lang-radio">
                    {{ 'toolbar.languages.english' | translate }}
                    <mat-icon svgIcon="gb" />
                </mat-radio-button>
            </mat-radio-group>
        </ids-menu>

        <ids-flat-link link="https://github.com/TukanHan/irrtirer" linkType="external">
            <mat-icon svgIcon="github" />
            {{ 'toolbar.github' | translate }}
        </ids-flat-link>
    `,
    styleUrl: './toolbar.scss',
})
export class Toolbar implements OnInit {
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
