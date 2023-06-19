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
  title = 'Voluman';
  path=["main.menu","availability"];
  constructor(private translate: TranslateService,
              private jsonFilesService: JsonFilesService,
              private storageService: StorageService){

    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
    this.jsonFilesService.getDataFromFiles();
  }

  changeLanguage(event:string){
    this.translate.use(event);
  }
  ngOnDestroy() {
    this.storageService.clearData();
  }
}
