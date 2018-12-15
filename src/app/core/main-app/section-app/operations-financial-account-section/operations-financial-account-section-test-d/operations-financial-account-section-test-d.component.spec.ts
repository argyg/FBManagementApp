import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsFinancialAccountSectionTestDComponent } from './operations-financial-account-section-test-d.component';

describe('OperationsFinancialAccountSectionTestDComponent', () => {
  let component: OperationsFinancialAccountSectionTestDComponent;
  let fixture: ComponentFixture<OperationsFinancialAccountSectionTestDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsFinancialAccountSectionTestDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsFinancialAccountSectionTestDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
