import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPropertyEditorComponent } from './sector-property-editor.component';

describe('SectorPropertyEditorComponent', () => {
  let component: SectorPropertyEditorComponent;
  let fixture: ComponentFixture<SectorPropertyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorPropertyEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorPropertyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
