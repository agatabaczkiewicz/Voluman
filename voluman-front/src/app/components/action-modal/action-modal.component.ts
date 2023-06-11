import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActionDescClass, SlotClass} from "../../models/models";

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss']
})
export class ActionModalComponent {

  @ViewChild('actionModal') actionModal: ElementRef | undefined;
  @Input('guest') guest = "false";
  action: ActionDescClass={};
  @Output() reactionEmit = new EventEmitter<ActionDescClass>();
  style = 'blue';
  constructor(private modalService: NgbModal) {


  }
  onSmileClick(){
    this.action.reaction = ":)";
    this.reactionEmit.emit(this.action);
    this.modalService.dismissAll();
  }
  onNeutralCLick(){
    this.action.reaction = ":|";
    this.reactionEmit.emit(this.action);
    this.modalService.dismissAll();
  }
  onRejectCLick(){
    this.action.reaction = ":(";
    this.reactionEmit.emit(this.action);
    this.modalService.dismissAll();

  }

  openModal(action: ActionDescClass, style: string){
    this.action = action;
    this.style= style;
    const modalRef = this.modalService.open(this.actionModal, { size: 'lg', backdrop: 'static'});
  }
}
