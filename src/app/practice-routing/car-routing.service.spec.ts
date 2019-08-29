import { TestBed } from '@angular/core/testing';

import { CarRoutingService } from './car-routing.service';

describe('CarRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarRoutingService = TestBed.get(CarRoutingService);
    expect(service).toBeTruthy();
  });
});
