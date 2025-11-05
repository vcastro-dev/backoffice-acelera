import { TestBed } from '@angular/core/testing';

import { CenarioDataStore } from './cenario-data-store.';

describe('Cenario', () => {
  let service: CenarioDataStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenarioDataStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
