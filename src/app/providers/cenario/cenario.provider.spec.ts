import { TestBed } from '@angular/core/testing';

import { CenarioProvider } from './cenario.provider';

describe('Cenario', () => {
  let service: CenarioProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenarioProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
