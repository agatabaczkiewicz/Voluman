import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalButtonMenuComponent} from "../../components/modal-button-menu/modal-button-menu.component";
import {StorageService} from "../../services/storage.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  path=["Główne Menu"];

  constructor(public router: Router,
              private modalService: NgbModal,
              private storageService: StorageService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.storageService.saveData("userLogged","false")
    this.router.navigate(['login']);
  }
  onAvailabilityClick(){

    const modalRef = this.modalService.open(ModalButtonMenuComponent);
  }

  onScheduleClick(){
    this.router.navigate(['schedule']);
  }

  onActionsClick(){
    this.router.navigate(['action']);
  }

}
