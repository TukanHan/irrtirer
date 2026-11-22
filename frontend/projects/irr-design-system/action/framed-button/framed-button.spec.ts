import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { IdsFramedButton } from './framed-button';

@Component({
    imports: [IdsFramedButton],
    template: '<ids-framed-button>Save changes</ids-framed-button>',
})
class FramedButtonHost {}

describe('IdsFramedButton', () => {
    let fixture: ComponentFixture<IdsFramedButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FramedButtonHost, IdsFramedButton],
        }).compileComponents();

        fixture = TestBed.createComponent(IdsFramedButton);
        fixture.detectChanges();
    });

    it('should create a button with its default inputs', () => {
        const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

        expect(fixture.componentInstance).toBeTruthy();
        expect(button.classList).toContain('ids-framed-button--neutral');
        expect(button.disabled).toBe(false);
        expect(button.type).toBe('button');
    });

    it.each(['accent', 'danger'] as const)('should apply the selected %s variant', (variant) => {
        fixture.componentRef.setInput('variant', variant);
        fixture.detectChanges();

        const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

        expect(button.classList).toContain(`ids-framed-button--${variant}`);
    });

    it('should disable the native button when disabled', () => {
        fixture.componentRef.setInput('disabled', true);
        fixture.detectChanges();

        const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

        expect(button.disabled).toBe(true);
    });

    it('should apply the selected native button type', () => {
        fixture.componentRef.setInput('type', 'submit');
        fixture.detectChanges();

        const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

        expect(button.type).toBe('submit');
    });

    it('should project its content into the button label', () => {
        const hostFixture = TestBed.createComponent(FramedButtonHost);
        hostFixture.detectChanges();

        const label = hostFixture.nativeElement.querySelector('.ids-button-label');

        expect(label.textContent.trim()).toBe('Save changes');
    });

    it('should emit the click event when clicked', () => {
        const clicked = vi.fn();
        fixture.componentInstance.clicked.subscribe(clicked);

        const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
        button.click();

        expect(clicked).toHaveBeenCalledOnce();
        expect(clicked).toHaveBeenCalledWith(expect.any(MouseEvent));
    });
});
