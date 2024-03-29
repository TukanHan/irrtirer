import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconSvgModuleModule } from '../core/icon-svg-module/icon-svg-module.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive, IconSvgModuleModule, HttpClientModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
