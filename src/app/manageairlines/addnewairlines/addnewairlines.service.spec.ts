import { TestBed } from '@angular/core/testing';

import { AddnewairlinesService } from './addnewairlines.service';

describe('AddnewairlinesService', () => {
  let service: AddnewairlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewairlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
