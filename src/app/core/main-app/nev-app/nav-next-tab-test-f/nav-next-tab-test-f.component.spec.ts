import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextTabTestFComponent } from './nav-next-tab-test-f.component';

describe('NavNextTabTestFComponent', () => {
  let component: NavNextTabTestFComponent;
  let fixture: ComponentFixture<NavNextTabTestFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNextTabTestFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNextTabTestFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
