import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { projectExistGuard } from './project-exist.guard';

describe('projectExistGuard', () => {
    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => projectExistGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
