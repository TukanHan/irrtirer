import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { TileSetComponent } from './tile-set.component';
import { TilesSet } from '../../../core/models/mosaic-project.model';

describe('TileSetComponent', () => {
  let component: TileSetComponent;
  let fixture: ComponentFixture<TileSetComponent>;
  let tilesSet: TilesSet = {
    name: "Test set",
    tiles: []
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileSetComponent, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileSetComponent);
    component = fixture.componentInstance;
    component.tilesSet = tilesSet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
