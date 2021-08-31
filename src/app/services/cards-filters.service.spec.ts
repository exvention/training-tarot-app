import { TestBed } from '@angular/core/testing';

import { CardsFiltersService } from './cards-filters.service';

describe('CardsFiltersService', () => {
  let service: CardsFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
