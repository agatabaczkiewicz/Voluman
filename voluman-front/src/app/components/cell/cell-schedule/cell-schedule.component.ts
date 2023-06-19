import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  constructor(private myElement: ElementRef) {
  }

  onCellClick(event:any) {
  if(this.style!= this.noActions) {
    if (this.style==this.yourShift) {

        // @ts-ignore
        if (this.scheduleSlot.actions[this.actionNumber].need > this.scheduleSlot.actions[this.actionNumber].scheduled - 1) {
          this.style =  this.missingPeople;
        } else {
          this.style = this.noMissingPeople;
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
     else if (this.style==this.noMissingPeople  || this.style==this.missingPeople) {
      this.style = this.yourShift;
      // @ts-ignore
      this.scheduleSlot.actions[this.actionNumber].your = true;
      this.loadEmit.emit(1);
      if(!this.day) {
        // @ts-ignore
        this.content = this.scheduleSlot.actions[this.actionNumber].action;
      }
      // @ts-ignore
      this.scheduleSlot.actions[this.actionNumber].scheduled = this.scheduleSlot.actions[this.actionNumber].scheduled + 1;
    }
    // this.myElement.nativeElement.parentElement.style.backgroundColor=this.style;
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
          if(!this.day) {
            this.content = action.action;
          }
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
    // this.myElement.nativeElement.parentElement.style.backgroundColor=this.style;



  }

}

