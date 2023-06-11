import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {MenuComponent} from "./views/menu/menu.component";
import {ScheduleComponent} from "./views/schedule/schedule.component";
import {AvailabilityComponent} from "./views/availability/availability.component";
import {MaxWeekHoursComponent} from "./views/max-week-hours/max-week-hours.component";
import {ActionsComponent} from "./views/actions/actions.component";
import {GuestMenuComponent} from "./views/guest-menu/guest-menu.component";
import {GuestFormComponent} from "./views/guest-form/guest-form.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'availability', component: AvailabilityComponent },
  { path: 'weekMax', component: MaxWeekHoursComponent },
  { path: 'action', component: ActionsComponent },
  { path: 'guest-menu', component: GuestMenuComponent },
  { path: 'guest-form', component: GuestFormComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
