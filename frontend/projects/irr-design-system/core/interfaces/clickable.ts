import { OutputRef } from '@angular/core';

export interface Clickable {
    clicked: OutputRef<MouseEvent>;
}
