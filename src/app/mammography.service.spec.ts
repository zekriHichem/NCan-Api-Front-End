import { TestBed } from '@angular/core/testing';

import { MammographyService } from './mammography.service';

describe('MammographyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MammographyService = TestBed.get(MammographyService);
    expect(service).toBeTruthy();
  });
});
