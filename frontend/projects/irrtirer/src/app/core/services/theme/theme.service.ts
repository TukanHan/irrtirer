import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeMode } from '../../models/user-preferences.interface';
import { Store } from '@ngrx/store';
import { selectThemeMode } from '../../state/user-preferences/user-preferences.selectors';
import { UserPreferencesActions } from '../../state/user-preferences/user-preferences.actions';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly store = inject(Store);

    private readonly theme = new BehaviorSubject<ThemeMode>('dark');

    public readonly theme$ = this.theme.asObservable();

    public init(): void {
        let selectedTheme = this.store.selectSignal<ThemeMode | undefined>(selectThemeMode)();
        if (!selectedTheme) {
            const browserLightPreference = window.matchMedia('(prefers-color-scheme: light)');
            selectedTheme = browserLightPreference?.matches ? 'light': 'dark';
        }

        this.setTheme(selectedTheme);
    }

    public changeTheme(theme: ThemeMode): void {
        this.setTheme(theme);
        this.store.dispatch(UserPreferencesActions.themeChanged({ theme }));
    }

    private setTheme(theme: ThemeMode): void {
        const html = document.documentElement;
        html.classList.toggle('dark-theme', theme === 'dark');
        html.classList.toggle('light-theme', theme === 'light');

        this.theme.next(theme);
    }
}
