import {Component, DEFAULT_CURRENCY_CODE, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {NeedClass} from "../../views/availability/availability.component";
import {formatDate} from "@angular/common";
import * as cloneDeep from 'lodash';
import {forEach} from "lodash";
import {StorageService} from "../services/storage.service";


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
  times:string[]=[]
  week=0;
  constructor(@Inject(LOCALE_ID) public locale: string,
              private storageService : StorageService) {

  }

  ngOnInit(): void {
    this.times=this.needs[0].slots.map(x=>x.startTime);

  }

  wasClickEvent(e:boolean){
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
}
