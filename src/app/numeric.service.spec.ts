import { TestBed } from '@angular/core/testing';

import { NumericService } from './numeric.service';

describe('NumericService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumericService = TestBed.get(NumericService);
    expect(service).toBeTruthy();
  });
});
