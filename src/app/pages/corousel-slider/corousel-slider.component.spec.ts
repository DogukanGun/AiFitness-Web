import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselSliderComponent } from './corousel-slider.component';

describe('CorouselSliderComponent', () => {
  let component: CorouselSliderComponent;
  let fixture: ComponentFixture<CorouselSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorouselSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorouselSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
