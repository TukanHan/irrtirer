import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ThemeSwitcher } from './core/services/theme-switcher/theme-switcher';
import { selectUserLang } from './core/state/user-preferences/user-preferences.selectors';
import { Toolbar } from './toolbar/toolbar';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Toolbar],
    templateUrl: './app.html',
    host: { class: 'flex flex-col h-dvh' },
})
export class App implements OnInit {
    public readonly title: string = 'Irrtirer';

    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly themeSwitcher = inject(ThemeSwitcher);

    public ngOnInit(): void {
        this.initLanguage();
        this.initTheme();
    }

    private initLanguage(): void {
        this.translate.addLangs(['pl', 'en']);
        this.translate.use(this.getLanguage());
    }

    private initTheme(): void {
        this.themeSwitcher.init();
    }

    private getLanguage(): string {
        return this.store.selectSignal(selectUserLang)() ?? this.translate.getBrowserLang() ?? 'pl';
    }
}
