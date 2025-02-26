import { WritableSignal } from "@angular/core";

export class RibbonAction {
    isActive: WritableSignal<boolean>;
    onClick: () => void;
    iconName: string;
}