import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsFinancialAccountSectionTestAComponent } from './operations-financial-account-section-test-a.component';

describe('OperationsFinancialAccountSectionTestAComponent', () => {
  let component: OperationsFinancialAccountSectionTestAComponent;
  let fixture: ComponentFixture<OperationsFinancialAccountSectionTestAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsFinancialAccountSectionTestAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsFinancialAccountSectionTestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
