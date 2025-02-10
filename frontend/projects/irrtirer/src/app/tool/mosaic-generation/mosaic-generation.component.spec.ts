import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicGenerationComponent } from './mosaic-generation.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('MosaicGenerationComponent', () => {
  let component: MosaicGenerationComponent;
  let fixture: ComponentFixture<MosaicGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicGenerationComponent],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
