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
  date:string="";
  times:string[]=[];
  need: SlotClass[]=[];
  schedule: SlotClass[]=[];
  actionCount = 1;
  load=0 ;
  actionName="";
  maxLoad=0;
  dateName:string="";
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
  openModal(dateNAme:string,date: string, need: SlotClass[], schedule: SlotClass[], times:string[], load:number, maxLoad:number){
    this.schedule = schedule;
    this.need= need;
    this.dateName=dateNAme
    this.date=date;
    this.times=times;
    this.load=load;
    this.maxLoad=maxLoad;
    let indexAction = this.schedule.findIndex(x=> x.actions?.length!=0);
    if(indexAction!=-1) {
      // @ts-ignore
      this.actionName = this.schedule[indexAction].actions[0].action;
    }
    const modalRef = this.modalService.open(this.calendarDayModal, { size: 'lg', backdrop: 'static'});
  }
}
