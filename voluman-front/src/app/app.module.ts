import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarComponent} from './components/calendar/calendar.component';
import {MenuComponent} from './views/menu/menu.component';
import {ScheduleComponent} from './views/schedule/schedule.component';
import {AvailabilityComponent} from './views/availability/availability.component';
import {LoginComponent} from './views/login/login.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CellAvailabilityComponent} from './components/cell/cell-availability/cell-availability.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalButtonMenuComponent} from './components/modal-button-menu/modal-button-menu.component';
import {MaxWeekHoursComponent} from './views/max-week-hours/max-week-hours.component';
import '@angular/common/locales/global/pl';
import {CellScheduleComponent} from './components/cell/cell-schedule/cell-schedule.component';
import {CalendarDayComponent} from './components/calendar-day/calendar-day.component';
import {ActionsComponent} from './views/actions/actions.component';
import {ActionModalComponent} from './components/action-modal/action-modal.component';
import {GuestMenuComponent} from './views/guest-menu/guest-menu.component';
import {GuestFormComponent} from './views/guest-form/guest-form.component';
import {ToastComponent} from './components/toast/toast.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MenuComponent,
    ScheduleComponent,
    AvailabilityComponent,
    LoginComponent,
    CellAvailabilityComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    ModalButtonMenuComponent,
    MaxWeekHoursComponent,
    CellScheduleComponent,
    CalendarDayComponent,
    ActionsComponent,
    ActionModalComponent,
    GuestMenuComponent,
    GuestFormComponent,
    ToastComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }}),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
