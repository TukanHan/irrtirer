import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCanvasComponent } from './color-canvas.component';

describe('ColorCanvasComponent', () => {
  let component: ColorCanvasComponent;
  let fixture: ComponentFixture<ColorCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorCanvasComponent);
    component = fixture.componentInstance;
    component.hValue = 0.5;
    component.sValue = 0.87;
    component.vValue = 0.72;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
