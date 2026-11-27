import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ProjectArchive } from './project-archive';

describe('ProjectArchive', () => {
    let service: ProjectArchive;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore({}), ProjectArchive],
        });
        service = TestBed.inject(ProjectArchive);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
