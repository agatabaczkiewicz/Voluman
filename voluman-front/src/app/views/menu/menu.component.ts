import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  path=["Główne Menu"];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onAvailabilityClick(){
    this.router.navigate(['availability']);
  }

}
