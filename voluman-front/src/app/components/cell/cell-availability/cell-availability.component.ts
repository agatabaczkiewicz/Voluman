import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NeedClass, SlotClass} from "../../../models/models";

@Component({
  selector: 'app-availability-cell',
  templateUrl: './cell-availability.component.html',
  styleUrls: ['./cell-availability.component.scss']
})
export class CellAvailabilityComponent implements OnInit{

  @Input('needSlot') needSlot:SlotClass = {isShift:false,
    startTime:"",
    endTime:""};
  @Input('value')value:string='';
  @Input('th') th:boolean = false;
  @Input('wasClick') wasClick:boolean = false;
  @Output()wasClickEmit = new EventEmitter<SlotClass>();
  content='';
  style = 'transparent'
  striped='repeating-linear-gradient(180deg,transparent,transparent 3.75px,#6495ED 3.75px,#6495ED 7.5px)'
  onCellClick(event:any) {

      if (this.style == this.striped) {
        this.style = 'transparent';
        this.needSlot.availability=false;
      } else {
        this.style = this.striped;
        this.needSlot.availability=true;
      if(event.shiftKey){
        this.wasClickEmit.emit(this.needSlot);
      }
    }
  }
  over(event:any) {
    if (event.shiftKey && this.wasClick) {
        this.style = this.striped;
    }
  }

  ngOnInit(): void {
    if(!this.th) {
      if (!(this.needSlot.isShift )) {
        this.content = '----'
        this.style='#E8E8E8'
      }
    }else{
      this.content=this.value;
    }
    if(this.needSlot.availability){
      this.style=this.striped;
    }
  }

  // out(event:any) {
  //   console.log('Mouseout called');
  //   if (event.shiftKey && this.style == 'red' ) {
  //     this.style = 'transparent';
  //   }
  // }
}
