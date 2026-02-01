import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileListElemComponent } from './tile-list-elem.component';
import { tileMock } from '../../../../../test-data/tiles-set.data';
import { TranslateModule } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('TileListElemComponent', () => {
    let component: TileListElemComponent;
    let fixture: ComponentFixture<TileListElemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TileListElemComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(TileListElemComponent, {
            bindings: [inputBinding('tile', () => tileMock)],
        });
        
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
