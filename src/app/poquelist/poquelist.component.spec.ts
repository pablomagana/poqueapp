import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoquelistComponent } from './poquelist.component';

describe('PoquelistComponent', () => {
  let component: PoquelistComponent;
  let fixture: ComponentFixture<PoquelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoquelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoquelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
