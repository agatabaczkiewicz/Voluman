import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {StorageService} from "../../services/storage.service";
import {start} from "@popperjs/core";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-max-week-hours',
  templateUrl: './max-week-hours.component.html',
  styleUrls: ['./max-week-hours.component.scss']
})
export class MaxWeekHoursComponent {
  path=["Główne Menu", "Dostępność", "Maksymalne obciążenie"];

  maxNow = new FormControl('');
  max1 = new FormControl('');
  max2 = new FormControl('');
  max3 = new FormControl('');
  max4 = new FormControl('');
  date=new Date()
  date1 = "";
  date2 = "";
  date3 ="";
  date4 = "";
  date5 = "";
  constructor(private storageService: StorageService, private router: Router,
              private toastService: ToastService) {
    this.date.setDate(this.date.getDate() + (((1 + 7 - this.date.getDay()) % 7) || 7))
    this.loadData();
  }
  loadData(){
    let fromStorage = this.storageService.getData("maxWeek");
    if(fromStorage != null){
      let data = JSON.parse(fromStorage);
      this.maxNow.setValue(data.maxNow);
      this.max1.setValue(data.max1);
      this.max2.setValue(data.max2);
      this.max3.setValue(data.max3);
      this.max4.setValue(data.max4);
    }
    this.date1 = this.getDate();
    this.date2 = this.getDate();
    this.date3 = this.getDate();
    this.date4 = this.getDate();
    this.date5 = this.getDate();

  }
  getDate(){
    let startDate = this.date.toLocaleDateString();
    this.date.setDate(this.date.getDate() + 6);
    let endDate = this.date.toLocaleDateString();
    this.date.setDate(this.date.getDate() + 1);
    return startDate + " - " + endDate;
  }
  onDismissClick(){
    this.loadData();
  }

  onSaveClick(){
    this.storageService.saveData("maxWeek", JSON.stringify({
      maxNow: this.maxNow.value,
      max1: this.max1.value,
      max2: this.max2.value,
      max3: this.max3.value,
      max4: this.max4.value,
    }))
    this.toastService.show('Maksymalne obciążenie zostały zapisane',{ classname: 'bg-success text-light'});
  }
  onClick(){
    this.router.navigate(['menu']);
  }
}
