import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NeedClass, SlotClass} from "../../models/models";

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent {

  @ViewChild('calendarDayModal') calendarDayModal: ElementRef | undefined;
  @Output()saveSignal=new EventEmitter<any>();
  date:String="";
  times:string[]=[];
  need: SlotClass[]=[];
  schedule: SlotClass[]=[];
  actionCount = 1;
  load=0 ;
  maxLoad=0;
  constructor(private modalService: NgbModal) {


  }


  loadChange(x:number){
    this.load = this.load +x;
  }

  onSaveClick() {
  this.saveSignal.emit({scheduleNew:this.schedule, loadNew : this.load});
  }
  onUnDoClick(){
    this.modalService.dismissAll();
  }
  openModal(date: String, need: SlotClass[], schedule: SlotClass[], times:string[], load:number, maxLoad:number){
    this.schedule = schedule;
    this.need= need;
    this.date=date;
    this.times=times;
    this.load=load;
    this.maxLoad=maxLoad;
    const modalRef = this.modalService.open(this.calendarDayModal, { size: 'lg', backdrop: 'static'});
  }
}
