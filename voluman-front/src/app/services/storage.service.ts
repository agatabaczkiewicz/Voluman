import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  private messageSource = new BehaviorSubject('default message');
  public currentMessageSubscriber = this.messageSource.asObservable();


  notify(message: any) {
    this.messageSource.next(message)
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

}
