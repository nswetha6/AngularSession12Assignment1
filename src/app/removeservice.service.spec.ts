import { TestBed, inject } from '@angular/core/testing';

import { RemoveserviceService } from './removeservice.service';

describe('RemoveserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveserviceService]
    });
  });

  it('should be created', inject([RemoveserviceService], (service: RemoveserviceService) => {
    expect(service).toBeTruthy();
  }));
});
