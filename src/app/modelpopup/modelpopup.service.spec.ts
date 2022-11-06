import { TestBed } from '@angular/core/testing';

import { ModelpopupService } from './modelpopup.service';

describe('ModelpopupService', () => {
  let service: ModelpopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelpopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
