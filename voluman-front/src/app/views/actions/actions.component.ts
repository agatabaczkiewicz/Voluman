import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionClass, ActionDescClass, NeedClass} from "../../models/models";
import {StorageService} from "../../components/services/storage.service";

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

  constructor(private storageService: StorageService) {
    let actions = this.storageService.getData("actions")
    if (actions != null) {
      let actionsList = JSON.parse(actions).actions as ActionDescClass[];
      for (let i = 0; i < actionsList.length; i++) {
        if(actionsList[i].reaction == ":)" || actionsList[i].reaction == ":|" ){
          this.yours.push(actionsList[i]);
        }
        else if(actionsList[i].reaction == ":("){
          this.rejected.push(actionsList[i]);
        } else{
          this.toSee.push(actionsList[i]);
        }
      }
    }
  }

  ngOnDestroy() {
    let plus = this.toSee.concat(this.rejected).concat(this.yours);
    this.storageService.saveData("actions", JSON.stringify({"actions": plus}));
  }

  click($event:ActionDescClass) {
    this.deleteFromList($event);

  }

  yesClick($event:ActionDescClass) {
    this.yours.push($event);
  }

  mehClick($event:ActionDescClass) {
    let index = this.toSee.findIndex(x=> x.name == $event.name);
    this.toSee.splice(index, 1);
    this.yours.push($event);
  }

  deleteFromList(action: ActionDescClass){
    let index = this.toSee.findIndex(x=> x.name == action.name);
    if (action.reaction == ":)" || action.reaction == ":|"){;
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

    }
  }
  ngOnInit() {

  }
}
