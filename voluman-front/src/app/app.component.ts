import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voluman-front';
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
