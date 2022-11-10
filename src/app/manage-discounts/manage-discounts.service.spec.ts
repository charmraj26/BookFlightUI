import { TestBed } from '@angular/core/testing';

import { ManageDiscountsService } from './manage-discounts.service';

describe('ManageDiscountsService', () => {
  let service: ManageDiscountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDiscountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
