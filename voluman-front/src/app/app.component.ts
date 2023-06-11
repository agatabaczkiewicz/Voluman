import {Component, OnDestroy} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {JsonFilesService} from "./services/json-files.service";
import {StorageService} from "./services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'voluman-front';
  path=["Główne menu","Dostępność"];
  constructor(translate: TranslateService,
              private jsonFilesService: JsonFilesService,
              private storageService: StorageService){
    translate.addLangs(['pl', 'klingon']);
    translate.setDefaultLang('pl');
    translate.use('pl');
    this.jsonFilesService.getDataFromFiles();
  }

  changeLanguage(){

  }
  ngOnDestroy() {
    this.storageService.clearData();
  }
}
