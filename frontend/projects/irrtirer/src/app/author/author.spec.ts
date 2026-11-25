import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Author } from './author';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Author', () => {
    let component: Author;
    let fixture: ComponentFixture<Author>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Author],
            providers: [provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(Author);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
