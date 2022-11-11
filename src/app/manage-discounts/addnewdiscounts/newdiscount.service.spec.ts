import { TestBed } from '@angular/core/testing';

import { NewdiscountService } from './newdiscount.service';

describe('NewdiscountService', () => {
  let service: NewdiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewdiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
