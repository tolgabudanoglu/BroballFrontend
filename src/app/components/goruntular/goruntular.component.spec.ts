import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoruntularComponent } from './goruntular.component';

describe('GoruntularComponent', () => {
  let component: GoruntularComponent;
  let fixture: ComponentFixture<GoruntularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoruntularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoruntularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
