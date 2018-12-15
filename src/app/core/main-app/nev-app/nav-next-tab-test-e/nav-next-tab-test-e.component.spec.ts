import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextTabTestEComponent } from './nav-next-tab-test-e.component';

describe('NavNextTabTestEComponent', () => {
  let component: NavNextTabTestEComponent;
  let fixture: ComponentFixture<NavNextTabTestEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNextTabTestEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNextTabTestEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
