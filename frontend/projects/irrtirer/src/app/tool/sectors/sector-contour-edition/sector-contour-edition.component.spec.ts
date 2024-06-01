import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorContourEditionComponent } from './sector-contour-edition.component';

describe('SectorContourEditionComponent', () => {
  let component: SectorContourEditionComponent;
  let fixture: ComponentFixture<SectorContourEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorContourEditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorContourEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
