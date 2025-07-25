import { TestBed } from '@angular/core/testing';
import { ToolService } from './tool.service';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ToolService', () => {
  let service: ToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolService]
    });
    service = TestBed.inject(ToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
