import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellScheduleComponent } from './cell-schedule.component';

describe('CellScheduleComponent', () => {
  let component: CellScheduleComponent;
  let fixture: ComponentFixture<CellScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellScheduleComponent]
    });
    fixture = TestBed.createComponent(CellScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
