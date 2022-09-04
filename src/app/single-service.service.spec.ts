import { TestBed } from '@angular/core/testing';

import { SingleServiceService } from './single-service.service';

describe('SingleServiceService', () => {
  let service: SingleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
