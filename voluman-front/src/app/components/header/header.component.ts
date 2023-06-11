import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userLog = false;
  constructor(private storageService: StorageService) {
    let user= this.storageService.getData("user");
    if(user=="true"){
      this.userLog=true;
    }

  }

}
