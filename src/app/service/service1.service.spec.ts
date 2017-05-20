/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service1Service]
    });
  });

  it('should ...', inject([Service1Service], (service: Service1Service) => {
    expect(service).toBeTruthy();
  }));
});
