import {Component, Inject, Input, LOCALE_ID, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {NeedClass, ScheduleClass} from "../../models/models";
import {CellAvailabilityComponent} from "../cell/cell-availability/cell-availability.component";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],

    providers:
[
  { provide: LOCALE_ID, useValue: 'pl' },
],
})
export class CalendarComponent implements OnInit {

  days = ["PN","WT","ŚR","CZ","PT","SB","ND"];
  wasClick:boolean=false;
  @Input('needs')needs:NeedClass[]=[];
  @Input('schedule')schedule:ScheduleClass={maxLoad:0,
  load:0,
  schedule:[]};
  @Input('isSchedule') isSchedule:boolean=false;
  times:string[]=[]
  week=0;
  load=0;
  maxLoad=0;
  idClick="";
  @ViewChild('dayModal') dayModal: any;
  @ViewChildren('cells') cells: QueryList<CellAvailabilityComponent> | undefined;

  constructor(@Inject(LOCALE_ID) public locale: string,
              private storageService : StorageService) {

  }

  ngOnInit(): void {

    let timesTMP=this.needs[0].slots.map(x=>x.startTime);
    this.times= timesTMP;
    this.load = this.schedule.load;
    this.maxLoad = this.schedule.maxLoad;
    let now = new Date();
    this.days= this.getWeekDay(now, !this.isSchedule);

  }

  wasClickEvent(e: any) {
    this.wasClick = !this.wasClick;
    if (this.cells && e.isShift) {
      let splited = this.idClick.split("-");
      let row = Number(splited[0]);
      let startId = Number(splited[1]);
      let endId = Number(e.id.split("-")[1]);
      let dif = endId - startId;

      let c = this.cells.filter(q => Number(q.myElement.nativeElement.id.split('-')[0]) == row)
        .filter(y => Number(y.myElement.nativeElement.id.split('-')[1]) > startId)
        .filter(z => Number(z.myElement.nativeElement.id.split('-')[1]) <= endId);
      for (let r of c) {
        r.style = 'repeating-linear-gradient(180deg,transparent,transparent 3.75px,#6495ED 3.75px,#6495ED 7.5px)';
      }
      this.idClick = '';

    } else {
      this.idClick = e.id;
    }
  }
  getWeekDay (startDate: Date, thisWeek:boolean){
    let nextMonday = new Date()
    if(thisWeek) {
      nextMonday.setDate(startDate.getDate() + ((7-startDate.getDay())%7+1) % 7);
    }else{
      nextMonday.setDate(startDate.getDate() + (7 - startDate.getDay()) % 7 + 1);

    }
    let nextWeekDates=[];
     nextWeekDates.push(nextMonday.toLocaleString('pl-PL', { day: 'numeric', month: 'numeric'}));
    for(let x of [].constructor(6)){
      nextMonday.setDate(nextMonday.getDate() + 1);
      nextWeekDates.push(nextMonday.toLocaleString('pl-PL', { day: 'numeric', month: 'numeric'}));
    }
    return nextWeekDates
  }
  onNextWeekClick(){
    if(this.needs[this.week+7] != undefined) {
      this.week = this.week + 7;
    }
  }

  onPreviousWeekClick(){
    if(this.needs[this.week-7] != undefined) {
      this.week = this.week - 7;
    }
  }

  onOpenDayClick(day:NeedClass, schedule: NeedClass){
  this.dayModal.openModal(day.date, day.slots, schedule.slots, this.times, this.schedule.load,this.schedule.maxLoad);
  }
  onLoadChange(event:number){
    this.load = this.load + event;
  }
  onSave(ob:any){
    let index = this.schedule.schedule.findIndex(x=>x.date == this.dayModal.date);
    this.schedule.load= ob.loadNew;
    this.schedule.schedule[index].slots= ob.scheduleNew;
    this.storageService.saveData('schedule', JSON.stringify(this.schedule));
    window.location.reload();
  }
}
