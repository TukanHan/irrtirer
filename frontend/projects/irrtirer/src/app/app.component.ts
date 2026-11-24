import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { selectUserLang } from './core/state/user-preferences/user-preferences.selectors';
import { ThemeSwitcher } from './core/services/theme-switcher/theme-switcher';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToolbarComponent],
    templateUrl: './app.component.html',
    host: { class: 'flex flex-col h-dvh' },
})
export class AppComponent implements OnInit {
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
