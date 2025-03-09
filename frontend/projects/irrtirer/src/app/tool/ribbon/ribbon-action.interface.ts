import { Signal } from "@angular/core";

export type ActionVisibility = 'on' | 'off' | 'disabled' | 'hidden'

export class RibbonAction {
    visibility: Signal<ActionVisibility>;
    onClick: () => void;
    iconName: string;
}