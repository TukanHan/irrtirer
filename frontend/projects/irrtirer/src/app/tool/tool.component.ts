import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-tool',
    standalone: true,
    imports: [
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule,
        RouterOutlet,
        RouterLink,
        RouterModule,
    ],
    templateUrl: './tool.component.html',
    styleUrl: './tool.component.scss',
})
export class ToolComponent {}
