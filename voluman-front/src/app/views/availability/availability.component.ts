import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../components/services/storage.service";
import {NeedClass} from "../../models/models";
import {CalendarComponent} from "../../components/calendar/calendar.component";

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  @ViewChild(CalendarComponent) calendar: CalendarComponent | undefined;

  constructor(public router: Router,
              private storageService: StorageService,) {
    this.getDataStorage();
  }

  path = ["Główne Menu", "Twoja dostępność"];
  days: NeedClass[] = [];

  ngOnInit(): void {

  }

  onSaveClick() {
    this.storageService.saveData('availability', JSON.stringify(this.calendar?.needs));
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
}
