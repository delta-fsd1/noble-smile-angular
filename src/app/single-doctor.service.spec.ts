import { TestBed } from '@angular/core/testing';

import { SingleDoctorService } from './single-doctor.service';

describe('SingleDoctorService', () => {
  let service: SingleDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
