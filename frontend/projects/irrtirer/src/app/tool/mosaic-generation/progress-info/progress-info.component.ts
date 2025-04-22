import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InfoState, InitInfoState, ProgressInfoState } from './progress-info.interface';

@Component({
    selector: 'app-progress-info',
    templateUrl: './progress-info.component.html',
    styleUrl: './progress-info.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressInfoComponent {
    public readonly infoState = input.required<InfoState>();

    protected isProgressInfo(state: InfoState): state is ProgressInfoState {
        return state.type === 'progress';
    }

    protected isInitInfo(state: InfoState): state is InitInfoState {
        return state.type === 'init';
    }
}
