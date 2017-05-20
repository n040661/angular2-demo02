/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChidTofatherService } from './chid-tofather.service';

describe('ChidTofatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChidTofatherService]
    });
  });

  it('should ...', inject([ChidTofatherService], (service: ChidTofatherService) => {
    expect(service).toBeTruthy();
  }));
});
