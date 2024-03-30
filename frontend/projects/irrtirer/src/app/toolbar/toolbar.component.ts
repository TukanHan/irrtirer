import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconSvgModuleModule } from '../core/icon-svg-module/icon-svg-module.module';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    IconSvgModuleModule,
    HttpClientModule,
    MatMenuModule,
    MatRadioModule,
    CommonModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  selectedLanguage$ = new BehaviorSubject('pl');

  public languageChanged(selected: MatRadioChange): void {
    this.selectedLanguage$.next(selected.value);
  }
}
