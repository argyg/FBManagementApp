import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFinancialAccountComponent } from './track-financial-account.component';

describe('TrackFinancialAccountComponent', () => {
  let component: TrackFinancialAccountComponent;
  let fixture: ComponentFixture<TrackFinancialAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackFinancialAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackFinancialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
