import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-max-week-hours',
  templateUrl: './max-week-hours.component.html',
  styleUrls: ['./max-week-hours.component.scss']
})
export class MaxWeekHoursComponent {
  path=["Główne Menu", "Twoja dostępność"];

  maxNow = new FormControl('');
  max1 = new FormControl('');
  max2 = new FormControl('');
  max3 = new FormControl('');
  max4 = new FormControl('');
}
