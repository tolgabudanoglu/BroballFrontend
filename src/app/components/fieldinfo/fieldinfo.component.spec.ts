import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldinfoComponent } from './fieldinfo.component';

describe('FieldinfoComponent', () => {
  let component: FieldinfoComponent;
  let fixture: ComponentFixture<FieldinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
