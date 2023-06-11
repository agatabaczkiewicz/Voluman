import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionClass, ActionDescClass, NeedClass} from "../../models/models";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit, OnDestroy {
  path = ['Główne menu', 'Lista akcji'];
  toSee: ActionDescClass[] = [];
  yours: ActionDescClass[] = [];
  rejected: ActionDescClass[] = [];
  guest: string | null = "false";
  constructor(private storageService: StorageService,
              private router: Router,
              private toastService: ToastService) {

    this.guest = this.storageService.getData("guest");
    let actions = this.storageService.getData("actions")
    if (actions != null) {
      if(this.guest  == "true"){
        let actionsList = JSON.parse(actions).actions as ActionDescClass[];
        this.toSee = actionsList;
      }else {
        let actionsList = JSON.parse(actions).actions as ActionDescClass[];
        for (let i = 0; i < actionsList.length; i++) {
          if (actionsList[i].reaction == ":)" || actionsList[i].reaction == ":|") {
            this.yours.push(actionsList[i]);
          } else if (actionsList[i].reaction == ":(") {
            this.rejected.push(actionsList[i]);
          } else {
            this.toSee.push(actionsList[i]);
          }
        }
      }
    }
  }

  ngOnDestroy() {
    // let plus = this.toSee.concat(this.rejected).concat(this.yours);
    // this.storageService.saveData("actions", JSON.stringify({"actions": plus}));
  }

  click($event:ActionDescClass) {
    this.deleteFromList($event);

  }

  yesClick($event:ActionDescClass) {
    this.yours.push($event);
    this.toastService.show('Akcja została dodana do Twoich akcji',{ classname: 'bg-success text-light'});
  }

  mehClick($event:ActionDescClass) {
    let index = this.toSee.findIndex(x=> x.name == $event.name);
    this.toSee.splice(index, 1);
    this.yours.push($event);
    this.toastService.show('Akcja została dodana do Twoich akcji jako mniej ważna',{ classname: 'bg-success text-light'});

  }

  deleteFromList(action: ActionDescClass){
    let index = this.toSee.findIndex(x=> x.name == action.name);
    if (action.reaction == ":)" || action.reaction == ":|"){;
      this.toastService.show('Akcja została dodana do Twoich akcji',{ classname: 'bg-success text-light'});
      if(index == -1){
        index = this.rejected.findIndex(x=> x.name == action.name);
        this.rejected.splice(index, 1);
      }else {
        this.toSee.splice(index, 1);
      }
      index = this.yours.findIndex(x=> x.name == action.name);
      if(index == -1){
        this.yours.push(action);
      }
    }else if(action.reaction ==":("){
      index = this.toSee.findIndex(x=> x.name == action.name);
      if(index == -1){
        index = this.yours.findIndex(x=> x.name == action.name);
        this.yours.splice(index, 1);
      }
      this.toSee.splice(index, 1);
      this.rejected.push(action);
      this.toastService.show('Akcja została usunięta z Twoich akcji',{ classname: 'bg-success text-light'});

    }
  }
  ngOnInit() {

  }
  onClick(){
    if(this.guest=="true"){
      this.router.navigate(['guest-menu']);
    }else {
      this.router.navigate(['menu']);
    }
  }
}
