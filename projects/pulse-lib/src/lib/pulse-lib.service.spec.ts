import { TestBed } from '@angular/core/testing';

import { PulseLibService } from './pulse-lib.service';

describe('PulseLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PulseLibService = TestBed.get(PulseLibService);
    expect(service).toBeTruthy();
  });
});
