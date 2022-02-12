import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartballComponent } from './startball.component';

describe('StartballComponent', () => {
  let component: StartballComponent;
  let fixture: ComponentFixture<StartballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
