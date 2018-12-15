import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextTabTestCComponent } from './nav-next-tab-test-c.component';

describe('NavNextTabTestCComponent', () => {
  let component: NavNextTabTestCComponent;
  let fixture: ComponentFixture<NavNextTabTestCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNextTabTestCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNextTabTestCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
