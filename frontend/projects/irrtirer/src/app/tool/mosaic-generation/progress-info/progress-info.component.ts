import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { InfoState, InitInfoState, ProgressInfoState } from './progress-info.interface';

@Component({
    selector: 'app-progress-info',
    imports: [],
    templateUrl: './progress-info.component.html',
    styleUrl: './progress-info.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressInfoComponent {
    infoState: InputSignal<InfoState> = input.required<InfoState>();

    isProgressInfo(state: InfoState): state is ProgressInfoState {
        return state.type === 'progress';
    }

    isInitInfo(state: InfoState): state is InitInfoState {
        return state.type === 'init';
    }
}
