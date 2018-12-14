import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficInInstallmentsComponent } from './traffic-in-installments.component';

describe('TrafficInInstallmentsComponent', () => {
  let component: TrafficInInstallmentsComponent;
  let fixture: ComponentFixture<TrafficInInstallmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficInInstallmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficInInstallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
