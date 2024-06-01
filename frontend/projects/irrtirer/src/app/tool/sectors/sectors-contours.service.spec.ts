import { TestBed } from '@angular/core/testing';

import { SectorsContoursService } from './sectors-contours.service';

describe('SectorsContoursService', () => {
  let service: SectorsContoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorsContoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
