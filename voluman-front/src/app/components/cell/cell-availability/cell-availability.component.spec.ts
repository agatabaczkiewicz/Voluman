import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellAvailabilityComponent } from './cell-availability.component';

describe('CalendarCellComponent', () => {
  let component: CellAvailabilityComponent;
  let fixture: ComponentFixture<CellAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellAvailabilityComponent]
    });
    fixture = TestBed.createComponent(CellAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
