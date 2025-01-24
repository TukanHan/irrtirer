import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileDisplayComponent } from './tile-display.component';
import { TileModel } from '../../../../core/models/mosaic-project.model';
import { Vector } from '../../../../core/models/vector.model';

describe('TileDisplayComponent', () => {
    let component: TileDisplayComponent;
    let fixture: ComponentFixture<TileDisplayComponent>;
    const tile: TileModel = {
        id: '1f400c3a-0294-4144-a35b-0e1cf7f467fc',
        vertices: [
            new Vector(0.48, 1.42),
            new Vector(1.75, -0.02),
            new Vector(0.29, -1.52),
            new Vector(-1.39, -0.8),
            new Vector(-1.3, 0.99),
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
