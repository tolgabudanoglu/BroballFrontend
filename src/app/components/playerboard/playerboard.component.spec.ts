import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerboardComponent } from './playerboard.component';

describe('PlayerboardComponent', () => {
  let component: PlayerboardComponent;
  let fixture: ComponentFixture<PlayerboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
