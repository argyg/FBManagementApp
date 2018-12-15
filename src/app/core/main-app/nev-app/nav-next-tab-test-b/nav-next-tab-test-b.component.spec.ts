import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextTabTestBComponent } from './nav-next-tab-test-b.component';

describe('NavNextTabTestBComponent', () => {
  let component: NavNextTabTestBComponent;
  let fixture: ComponentFixture<NavNextTabTestBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNextTabTestBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNextTabTestBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
