import { ElementRef, InjectionToken, Signal } from '@angular/core';

/** Gives library directives the native control inside a component, for ARIA, focus and events only. */
export interface NativeControlHost {
    nativeControl: Signal<ElementRef<HTMLElement>>;
}

export const IDS_NATIVE_CONTROL_HOST = new InjectionToken<NativeControlHost>('IdsNativeControlHost');
