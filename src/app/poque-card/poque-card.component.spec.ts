import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoqueCardComponent } from './poque-card.component';

describe('PoqueCardComponent', () => {
  let component: PoqueCardComponent;
  let fixture: ComponentFixture<PoqueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoqueCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
