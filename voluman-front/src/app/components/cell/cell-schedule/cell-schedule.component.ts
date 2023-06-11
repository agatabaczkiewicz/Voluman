import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SlotClass} from "../../../models/models";

@Component({
  selector: 'app-cell-schedule',
  templateUrl: './cell-schedule.component.html',
  styleUrls: ['./cell-schedule.component.scss']
})
export class CellScheduleComponent implements OnInit{

  @Input('needSlot') needSlot:SlotClass = {isShift:false,
    startTime:"",
    endTime:""};
  @Input('scheduleSlot') scheduleSlot:SlotClass = {isShift:false,
    startTime:"",
    endTime:""};
  @Input('th') th:boolean = false;
  @Input('day') day:boolean = false;
  @Input('wasClick') wasClick:boolean = false;
  @Output()wasClickEmit = new EventEmitter<SlotClass>();
  @Output()loadEmit = new EventEmitter<number>();
  content='';
  style = 'transparent'
  missingPeople = 'pink';
  noMissingPeople = '#FFFACD';
  yourShift='#B9D9EB'
  noActions='transparent'
  actionNumber:number=0;
  avail='repeating-linear-gradient(180deg,transparent,transparent 5.75px,#6495ED 5.75px,#6495ED 7.5px)'

  onCellClick(event:any) {
  if(this.style!= this.noActions) {
    if (this.style.indexOf(this.yourShift) != -1) {

        // @ts-ignore
        if (this.scheduleSlot.actions[this.actionNumber].need > this.scheduleSlot.actions[this.actionNumber].scheduled - 1) {
          this.style = this.avail.replace(this.noActions, this.missingPeople);
        } else {
          this.style = this.avail.replace(this.noActions, this.noMissingPeople);
        }
        this.loadEmit.emit(-1);
        // @ts-ignore
        this.scheduleSlot.actions[this.actionNumber].your = false;
        // @ts-ignore
        if (this.scheduleSlot.actions[this.actionNumber].need > this.scheduleSlot.actions[this.actionNumber].scheduled - 1) {
          this.style = this.missingPeople;
          this.content="";
        } else {
          this.style = this.noMissingPeople
          this.content="";
        }
        // @ts-ignore
        this.scheduleSlot.actions[this.actionNumber].scheduled = this.scheduleSlot.actions[this.actionNumber].scheduled - 1;
      }
     else if (this.style.indexOf(this.noMissingPeople) != -1 || this.style.indexOf(this.missingPeople) !=-1) {
      this.style = this.yourShift;
      // @ts-ignore
      this.scheduleSlot.actions[this.actionNumber].your = true;
      this.loadEmit.emit(1);
      // @ts-ignore
      this.content = this.scheduleSlot.actions[this.actionNumber].action;
      // @ts-ignore
      this.scheduleSlot.actions[this.actionNumber].scheduled = this.scheduleSlot.actions[this.actionNumber].scheduled + 1;
    }
    }
  }


  onSaveCLick(){

  }
  ngOnInit(): void {

      this.needSlot.availability = <boolean>this.needSlot.availability;

    if (!(this.needSlot.isShift)) {
        this.content = '----';
      this.style='transparent';
    }else {
      let isMissingPeople = false;
      let isMine = false;
      // @ts-ignore
      for (let action of this.scheduleSlot.actions) {
        if (action.need > action.scheduled) {
          isMissingPeople = true;
        }
        if (action.your) {
          isMine = true;
          this.content = action.action;
        }
      }
      if (isMissingPeople) {
        this.style = this.missingPeople
      } else {
        this.style = this.noMissingPeople;
      }
      if (isMine) {
        this.style = this.yourShift
      }
    }
    if(this.needSlot.availability){
      let nowColor = this.style;
      this.style = this.avail.replace('transparent', nowColor);
    }


  }

}

