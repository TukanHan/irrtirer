import { afterNextRender, afterRenderEffect, DestroyRef, Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { IdentityCounter, IDS_NATIVE_CONTROL_HOST } from 'irr-design-system/core';
import { IdsMenu } from '../menu';

@Directive({
    selector: '[idsMenuTriggerFor]',
})
export class IdsMenuTrigger {
    public readonly idsMenuTriggerFor = input.required<IdsMenu>();

    private readonly host = inject(ElementRef<HTMLElement>);
    private readonly renderer = inject(Renderer2);
    private readonly destroyRef = inject(DestroyRef);
    private readonly nativeControl = inject(IDS_NATIVE_CONTROL_HOST, { self: true }).nativeControl;
    private readonly fallbackControlId = `ids-menu-trigger-${inject(IdentityCounter).getNextIdNumber()}`;

    constructor() {
        afterNextRender(() => this.connectToControl());
        afterRenderEffect(() => this.reflectMenuState());
    }

    private connectToControl(): void {
        const control = this.nativeControl().nativeElement;
        control.id ||= this.fallbackControlId;
        const unlisten = this.renderer.listen(control, 'click', () => this.idsMenuTriggerFor().toggle(this.host.nativeElement, control));
        this.destroyRef.onDestroy(unlisten);
    }

    private reflectMenuState(): void {
        const control = this.nativeControl().nativeElement;
        const menu = this.idsMenuTriggerFor();
        control.setAttribute('aria-haspopup', 'menu');
        control.setAttribute('aria-expanded', String(menu.isOpen()));
        // The panel exists in the DOM only while open.
        if (menu.isOpen()) {
            control.setAttribute('aria-controls', menu.panelId);
        } else {
            control.removeAttribute('aria-controls');
        }
    }
}
