import { InjectionToken, OutputRef } from '@angular/core';

export interface Clickable {
    clicked: OutputRef<MouseEvent>;
}

export const IDS_CLICKABLE = new InjectionToken<Clickable>('IdsClickable');
