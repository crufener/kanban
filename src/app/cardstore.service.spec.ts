import { TestBed, inject } from '@angular/core/testing';

import { CardService } from './cardstore.service';

describe('CardstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should be created', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});
