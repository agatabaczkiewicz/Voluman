import { Component, OnInit } from '@angular/core';

import {StorageService} from "../../services/storage.service";
import {NeedClass, ScheduleClass} from "../../models/models";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  v:NeedClass[]=[]
  availability:NeedClass[]=[]
  constructor(private storageService: StorageService,
              private router:Router,
              public toastService: ToastService) {
    let fromStorage = this.storageService.getData("schedule");

    if(fromStorage != null) {
      this.schedule = JSON.parse(fromStorage) as ScheduleClass;
      this.v = this.schedule.schedule;
    }
    fromStorage = this.storageService.getData("availability");
    if(fromStorage != null) {
      this.availability = JSON.parse(fromStorage) as NeedClass[];
    }else{
      fromStorage = this.storageService.getData("needs");
      if(fromStorage != null) {
        this.availability = JSON.parse(fromStorage).schedule as NeedClass[];
      }
    }
  }
  path=["main.menu", "weekplan"];
  schedule:ScheduleClass={
    maxLoad:0,
    load:0,
    schedule:[]
  };
  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['menu']);
  }

  onAccept(){
    this.schedule.accepted=true;
    this.storageService.saveData("schedule",JSON.stringify(this.schedule));


    this.toastService.show('Plan tygodnia został zaakceptowany', {
      classname: 'bg-success text-light'
    });

    window.location.reload();
  }
}
