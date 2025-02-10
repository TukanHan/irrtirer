import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-extended-panel',
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './extended-panel.component.html',
    styleUrl: './extended-panel.component.scss',
    //TODO ChangeDetection + signals
})
export class ExtendedPanelComponent {
  @Input()
  label: string;

  @Input()
  isOpen: boolean = true;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
