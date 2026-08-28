import { TestBed } from '@angular/core/testing';
import { ProjectImportService } from './project-import.service';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProjectImportService', () => {
    let service: ProjectImportService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore({}), ProjectImportService],
        });
        service = TestBed.inject(ProjectImportService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
