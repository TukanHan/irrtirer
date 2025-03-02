import { IActiveCanvas } from "../../../../active-canvas/src/lib/models/canvas/active-canvas.interface";
import { RibbonAction } from "./ribbon/ribbon-action.interface";

export interface ToolViewInitSetting {
    ribbon: RibbonAction[]
}

export interface ToolView {
    sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting;
}