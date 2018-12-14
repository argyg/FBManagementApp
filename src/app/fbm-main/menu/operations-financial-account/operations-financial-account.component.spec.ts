import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsFinancialAccountComponent } from './operations-financial-account.component';

describe('OperationsFinancialAccountComponent', () => {
  let component: OperationsFinancialAccountComponent;
  let fixture: ComponentFixture<OperationsFinancialAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsFinancialAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsFinancialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
