import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, input, InputSignal, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-expandable-panel',
    templateUrl: './expandable-panel.component.html',
    styleUrl: 'expandable-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('expand', [
            state('closed', style({ height: '0' })),
            state('open', style({ height: AUTO_STYLE })),
            transition('open => closed', animate('{{timing}}ms ease-out'), { params: { timing: '200' } }),
            transition('closed => open', animate('{{timing}}ms ease-in'), { params: { timing: '300' } }),
            transition(':enter', []),
        ]),
    ],
})
export class ExpandablePanelComponent {
    public isOpen: InputSignal<boolean> = input.required();

    @HostBinding('@expand')
    protected get getExpandAnimationState(): unknown {
        const isOpen: boolean = this.isOpen();

        return { 
            value: isOpen ? 'open' : 'closed',
            params: { timing: this.calcExpandingTime(this.hostNativeElement.scrollHeight, isOpen) }
        };
    }

    private hostNativeElement: HTMLElement;

    constructor(private readonly viewRef: ViewContainerRef) {
        this.hostNativeElement = this.viewRef.element.nativeElement;
    }

    protected calcExpandingTime(height: number, isExpanding: boolean): number {
        const time = 150 + Math.sqrt(height) * 5;
        return time * (isExpanding ? 1 : 0.66);
    }
}
