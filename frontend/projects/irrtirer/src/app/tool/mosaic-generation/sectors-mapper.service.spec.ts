import { TestBed } from '@angular/core/testing';

import { SectorsMapperService } from './sectors-mapper.service';

describe('SectorsMapperService', () => {
  let service: SectorsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
