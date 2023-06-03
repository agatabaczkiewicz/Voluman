import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class JsonFilesService {

  constructor(private http: HttpClient,
              private storageService: StorageService) {}

  getDataFromFiles(){
    let url: string = '/assets/json/users.json';
    this.http.get(url).subscribe( (res) => {
      // console.log(res);
      this.storageService.saveData("user",JSON.stringify(res) );
    });
    url= '/assets/json/schedule.json';
    this.http.get(url).subscribe( (res) => {
      // console.log(res);
      this.storageService.saveData("schedule",JSON.stringify(res) );
    });
    url = '/assets/json/plan.json';
    this.http.get(url).subscribe( (res) => {
      // console.log(res);
      this.storageService.saveData("plan",JSON.stringify(res) );
    });
    url= '/assets/json/action.json';
    this.http.get(url).subscribe( (res) => {
      // console.log(res);
      this.storageService.saveData("actions",JSON.stringify(res) );
    });
    url= '/assets/json/needs.json';
    this.http.get(url).subscribe( (res) => {
      // console.log(res);
      this.storageService.saveData("needs",JSON.stringify(res) );
    });
  }


}
