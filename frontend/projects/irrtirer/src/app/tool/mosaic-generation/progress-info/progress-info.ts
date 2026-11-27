import { Component, input } from '@angular/core';
import { InfoState, InitInfoState, ProgressInfoState } from './progress-info.interface';

@Component({
    selector: 'app-progress-info',
    template: `
        @let info = infoState();
        @if (isProgressInfo(info)) {
            <span class="loading-dots">{{ info.sector }}</span>
            <span class="ml-auto">{{ info.percent }}%</span>
        } @else if (isInitInfo(info)) {
            <span class="loading-dots">{{ info.message }}</span>
        }
    `,
    styleUrl: './progress-info.scss',
})
export class ProgressInfo {
    public readonly infoState = input.required<InfoState>();

    protected isProgressInfo(state: InfoState): state is ProgressInfoState {
        return state.type === 'progress';
    }

    protected isInitInfo(state: InfoState): state is InitInfoState {
        return state.type === 'init';
    }
}
