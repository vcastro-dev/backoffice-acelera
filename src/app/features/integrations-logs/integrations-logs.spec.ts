import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsLogs } from './integrations-logs';

describe('IntegrationsLogs', () => {
  let component: IntegrationsLogs;
  let fixture: ComponentFixture<IntegrationsLogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationsLogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationsLogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
