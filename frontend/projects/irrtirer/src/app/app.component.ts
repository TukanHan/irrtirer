import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToolbarComponent, TranslateModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'irrtirer';

    constructor(private translate: TranslateService) {
        this.translate.addLangs(['pl', 'en']);
        this.translate.setDefaultLang('pl');
        this.translate.use(translate.getBrowserLang() ?? 'pl');
    }
}
