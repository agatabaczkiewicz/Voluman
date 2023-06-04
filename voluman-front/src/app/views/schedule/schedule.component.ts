import { Component, OnInit } from '@angular/core';
import {NeedClass} from "../availability/availability.component";
import {StorageService} from "../../components/services/storage.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  v:NeedClass[]=[]
  constructor(private storageService: StorageService) {
    let fromStorage = this.storageService.getData("schedule");
    if(fromStorage != null) {
      this.schedule = JSON.parse(fromStorage) as ScheduleClass;
      this.v = this.schedule.schedule;
    }
  }
  path=["Główne Menu", "Twoja dostępność"];
  schedule:ScheduleClass={
    maxLoad:"",
    load:"",
    schedule:[]
  };
  ngOnInit(): void {
  }

}
export interface ScheduleClass{
  maxLoad:string,
  load:string,
  schedule:NeedClass[]
}
