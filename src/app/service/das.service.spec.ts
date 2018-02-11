import { TestBed, inject } from '@angular/core/testing';

import { DasService } from './das.service';

describe('DasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DasService]
    });
  });

  it('should be created', inject([DasService], (service: DasService) => {
    expect(service).toBeTruthy();
  }));
});
