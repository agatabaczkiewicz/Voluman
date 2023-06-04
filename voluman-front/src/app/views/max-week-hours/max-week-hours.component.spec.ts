import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxWeekHoursComponent } from './max-week-hours.component';

describe('MaxWeekHoursComponent', () => {
  let component: MaxWeekHoursComponent;
  let fixture: ComponentFixture<MaxWeekHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxWeekHoursComponent]
    });
    fixture = TestBed.createComponent(MaxWeekHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
