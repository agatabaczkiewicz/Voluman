import {Component, DEFAULT_CURRENCY_CODE, Inject, Input, LOCALE_ID, OnInit, ViewChild} from '@angular/core';

import {formatDate} from "@angular/common";
import * as cloneDeep from 'lodash';
import {forEach} from "lodash";
import {StorageService} from "../services/storage.service";
import {NeedClass, SlotClass} from "../../models/models";


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
  @Input('schedule')schedule:NeedClass[]=[];
  @Input('isSchedule') isSchedule:boolean=false;
  times:string[]=[]
  week=0;
  @ViewChild('dayModal') dayModal: any;
  constructor(@Inject(LOCALE_ID) public locale: string,
              private storageService : StorageService) {

  }

  ngOnInit(): void {
    this.times=this.needs[0].slots.map(x=>x.startTime);

  }

  wasClickEvent(e:SlotClass){
    this.wasClick= ! this.wasClick;

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
  this.dayModal.openModal(day.date, day.slots, schedule.slots, this.times );
  }
}
