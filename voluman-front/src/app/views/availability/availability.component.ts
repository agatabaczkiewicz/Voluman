import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {NeedClass} from "../../models/models";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  @ViewChild(CalendarComponent) calendar: CalendarComponent | undefined;

  constructor(public router: Router,
              private storageService: StorageService,private toastService:ToastService) {
    this.getDataStorage();
  }

  path = ["Główne Menu", "Dstępność", "Terminy"];
  days: NeedClass[] = [];

  ngOnInit(): void {

  }

  onSaveClick() {
    this.storageService.saveData('availability', JSON.stringify(this.calendar?.needs));
    this.toastService.show('Terminy Zostały zapisane',{ classname: 'bg-success text-light'});
  }

  onUnDoClick() {
    this.getDataStorage();
    if (this.calendar) {
      this.calendar.needs = this.days;
    }
  }

  getDataStorage() {
    let fromStorage = this.storageService.getData("availability");
    if(fromStorage != null) {
      this.days = JSON.parse(fromStorage) as NeedClass[];
    }else{
      fromStorage = this.storageService.getData("needs");
      if(fromStorage != null) {
        this.days= JSON.parse(fromStorage).schedule as NeedClass[];
      }
    }

  }
  onClick(){
    this.router.navigate(['menu']);
  }
}
