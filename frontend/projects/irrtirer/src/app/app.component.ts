import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { selectUserLang } from './core/state/user-preferences/user-preferences.selectors';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToolbarComponent, TranslateModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    public title: string = 'Irrtirer';

    constructor(private translate: TranslateService, private store: Store) {
        this.translate.addLangs(['pl', 'en']);
        this.translate.setDefaultLang('pl');
        this.translate.use(this.getLanguage());
    }

    private getLanguage(): string {
        return this.store.selectSignal(selectUserLang)() ?? this.translate.getBrowserLang() ?? 'pl';
    }
}
