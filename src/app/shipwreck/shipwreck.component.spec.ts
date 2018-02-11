import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipwreckComponent } from './shipwreck.component';

describe('ShipwreckComponent', () => {
  let component: ShipwreckComponent;
  let fixture: ComponentFixture<ShipwreckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipwreckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipwreckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
