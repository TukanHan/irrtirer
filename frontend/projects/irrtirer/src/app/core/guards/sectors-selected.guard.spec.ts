import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sectorsSelectedGuard } from './sectors-selected.guard';

describe('sectorsSelectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sectorsSelectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
