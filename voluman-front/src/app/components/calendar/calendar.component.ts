import {Component, Input, OnInit} from '@angular/core';
import {NeedClass} from "../../views/availability/availability.component";



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  days = ["PN","WT","ŚR","CZ", "PT","SB","ND"];
  wasClick:boolean=false;
  @Input('needs')needs:NeedClass[]=[];
  times:string[]=[]
  constructor() {

  }

  ngOnInit(): void {
    this.times=this.needs[0].slots.map(x=>x.startTime);

  }
  onCellClick(){
    console.log("dd");
  }

  wasClickEvent(e:boolean){
    this.wasClick= ! this.wasClick;
  }
}
