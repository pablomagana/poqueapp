import { TestBed } from '@angular/core/testing';

import { PoquemonService } from './poquemon.service';

describe('PoquemonService', () => {
  let service: PoquemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoquemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
