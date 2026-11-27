import { IActiveCanvas } from 'active-canvas';
import { RibbonAction } from './ribbon/ribbon-action.interface';

export interface ToolViewInitSetting {
    ribbon: RibbonAction[];
}

export interface ToolView {
    sectionEntered(activeCanvas: IActiveCanvas, shouldFocusOnObject: boolean): ToolViewInitSetting;
}
