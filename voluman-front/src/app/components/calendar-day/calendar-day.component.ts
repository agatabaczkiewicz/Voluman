import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NeedClass, SlotClass} from "../../models/models";

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent {

  @ViewChild('calendarDayModal') calendarDayModal: ElementRef | undefined;
  date:String="";
  times:string[]=[];
  need: SlotClass[]=[];
  schedule: SlotClass[]=[];
  actionCount = 1;
  constructor(private modalService: NgbModal) {


  }

  getMaxActionCount(){
    let resl=this.schedule.map(x=> x.actions ?  x.actions.length: 0);
    if(resl){
      this. actionCount = Math.max(...resl);
    }

  }
  onSaveClick() {

  }

  openModal(date: String, need: SlotClass[], schedule: SlotClass[], times:string[]){
    this.schedule = schedule;
    this.need= need;
    this.date=date;
    this.times=times;
    this.getMaxActionCount();
    const modalRef = this.modalService.open(this.calendarDayModal, { size: 'lg', backdrop: 'static'});
  }
}
