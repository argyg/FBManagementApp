import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsFinancialAccountSectionTestEComponent } from './operations-financial-account-section-test-e.component';

describe('OperationsFinancialAccountSectionTestEComponent', () => {
  let component: OperationsFinancialAccountSectionTestEComponent;
  let fixture: ComponentFixture<OperationsFinancialAccountSectionTestEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsFinancialAccountSectionTestEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsFinancialAccountSectionTestEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
