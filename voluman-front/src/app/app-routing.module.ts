import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {MenuComponent} from "./views/menu/menu.component";
import {ScheduleComponent} from "./views/schedule/schedule.component";
import {AvailabilityComponent} from "./views/availability/availability.component";
import {MaxWeekHoursComponent} from "./views/max-week-hours/max-week-hours.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'availability', component: AvailabilityComponent },
  { path: 'weekMax', component: MaxWeekHoursComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
