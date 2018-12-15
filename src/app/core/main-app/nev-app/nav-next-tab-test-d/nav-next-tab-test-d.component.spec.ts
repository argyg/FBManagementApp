import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextTabTestDComponent } from './nav-next-tab-test-d.component';

describe('NavNextTabTestDComponent', () => {
  let component: NavNextTabTestDComponent;
  let fixture: ComponentFixture<NavNextTabTestDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNextTabTestDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNextTabTestDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
