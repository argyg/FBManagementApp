import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsFinancialAccountSectionTestCComponent } from './operations-financial-account-section-test-c.component';

describe('OperationsFinancialAccountSectionTestCComponent', () => {
  let component: OperationsFinancialAccountSectionTestCComponent;
  let fixture: ComponentFixture<OperationsFinancialAccountSectionTestCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsFinancialAccountSectionTestCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsFinancialAccountSectionTestCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
