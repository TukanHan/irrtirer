import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileDisplayComponent } from './tile-display.component';
import { Tile } from '../../../../core/models/mosaic-project.model';

describe('TileDisplayComponent', () => {
    let component: TileDisplayComponent;
    let fixture: ComponentFixture<TileDisplayComponent>;
    const tile: Tile = {
        id: '1f400c3a-0294-4144-a35b-0e1cf7f467fc',
        vertices: [
            { x: 0.48, y: 1.42 },
            { x: 1.75, y: -0.02 },
            { x: 0.29, y: -1.52 },
            { x: -1.39, y: -0.8 },
            { x: -1.3, y: 0.99 },
        ],
        color: { r: 255, g: 255, b: 255 },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TileDisplayComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TileDisplayComponent);
        component = fixture.componentInstance;
        component.tile = tile;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
