import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButtonMenuComponent } from './modal-button-menu.component';

describe('ModalButtonMenuComponent', () => {
  let component: ModalButtonMenuComponent;
  let fixture: ComponentFixture<ModalButtonMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalButtonMenuComponent]
    });
    fixture = TestBed.createComponent(ModalButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
