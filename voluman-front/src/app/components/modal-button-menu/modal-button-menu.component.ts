import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-button-menu',
  templateUrl: './modal-button-menu.component.html',
  styleUrls: ['./modal-button-menu.component.scss']
})
export class ModalButtonMenuComponent {

  @ViewChild('menuModal') theModal: ElementRef | undefined;
  constructor(private router: Router,
              private modalService: NgbModal) {
  }

  onScheduleClick(){
    this.modalService.dismissAll();
    this.router.navigate(['availability']);
    // this.activeModal.close('Close click')
  }
  onMaxClick(){
    this.modalService.dismissAll();
    this.router.navigate(['weekMax']);
  }
  openModal(){
    const modalRef = this.modalService.open(this.theModal, { size: 'lg', backdrop: 'static'});
  }
}
