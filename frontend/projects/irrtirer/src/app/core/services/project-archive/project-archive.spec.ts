import { TestBed } from '@angular/core/testing';
import { ProjectArchive } from './project-archive';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideMockStore } from '@ngrx/store/testing';

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
