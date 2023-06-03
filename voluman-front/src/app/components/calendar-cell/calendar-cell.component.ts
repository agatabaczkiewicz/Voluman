import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss']
})
export class CalendarCellComponent implements OnInit{

  @Input('value') value:string = '';
  @Input('th') th:boolean = false;
  @Input('wasClick') wasClick:boolean = false;
  @Output()wasClickEmit = new EventEmitter<boolean>();
  content='';
  style = 'transparent'

  onCellClick(event:any) {
    if(this.content=='') {
      if (this.style == 'red') {
        this.style = 'transparent';
      } else {
        this.style = 'red';
      }
      if(event.shiftKey){
        this.wasClickEmit.emit(true);
      }
    }
  }
  over(event:any) {
    if (event.shiftKey && this.wasClick) {
      if(this.content=='') {
        this.style = 'red';
      }
    }
  }

  ngOnInit(): void {
    if(!this.th) {
      this.value = JSON.parse(this.value);
      if (!(this.value)) {
        this.content = '----'
      }
    }else{
      this.content=this.value;
    }
  }

  // out(event:any) {
  //   console.log('Mouseout called');
  //   if (event.shiftKey && this.style == 'red' ) {
  //     this.style = 'transparent';
  //   }
  // }
}
