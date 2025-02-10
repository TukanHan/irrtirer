import { TestBed } from '@angular/core/testing';

import { MosaicGenerationService } from './mosaic-generation.service';

describe('MosaicGenerationService', () => {
  let service: MosaicGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MosaicGenerationService]
    });
    service = TestBed.inject(MosaicGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
