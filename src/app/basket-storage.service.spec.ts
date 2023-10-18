import { TestBed } from '@angular/core/testing';

import { BasketStorageService } from './basket-storage.service';

describe('BasketStorageService', () => {
  let service: BasketStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
