import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-guest-menu',
  templateUrl: './guest-menu.component.html',
  styleUrls: ['./guest-menu.component.scss']
})
export class GuestMenuComponent {

  path=["guest.menu"];

  constructor(private router:Router,
              private storageService: StorageService) {
  }

  onClick(){
    this.storageService.saveData("guest","false")
    this.router.navigate(['login']);

  }
  onActionsClick(){
    this.router.navigate(['action'])
  }
  onBeVolonteer(){
    this.router.navigate(['guest-form']);
  }
}
