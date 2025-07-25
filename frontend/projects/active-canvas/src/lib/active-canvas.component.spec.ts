import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveCanvasComponent } from './active-canvas.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ActiveCanvasComponent', () => {
  let component: ActiveCanvasComponent;
  let fixture: ComponentFixture<ActiveCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});