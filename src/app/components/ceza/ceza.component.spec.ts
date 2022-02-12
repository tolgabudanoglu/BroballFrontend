import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CezaComponent } from './ceza.component';

describe('CezaComponent', () => {
  let component: CezaComponent;
  let fixture: ComponentFixture<CezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
