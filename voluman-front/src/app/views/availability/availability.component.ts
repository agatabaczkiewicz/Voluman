import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../components/services/storage.service";

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  constructor(public router: Router,
              private storageService: StorageService,) {
    let fromStorage = this.storageService.getData("needs");
    if(fromStorage != null) {
      this.days = JSON.parse(fromStorage).schedule as NeedClass[];
    }
  }
  path=["Główne Menu", "Twoja dostępność"];
  days:NeedClass[]=[];
  ngOnInit(): void {

    // let fromStorage = this.storageService.getData("needs");
    // if(fromStorage != null) {
    //   this.days = JSON.parse(fromStorage).schedule as NeedClass[];
    // }
  }

}
export interface NeedClass{
  date:string,
  slots:SlotClass[]
}

export interface SlotClass{
  startTime:string,
  endTime:string,
  isShift:string;
}
