import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../components/services/storage.service";
import {from} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private storageService: StorageService,
              public router: Router) { }
  users=[];
  login = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  ngOnInit(): void {
    let fromStorage = this.storageService.getData("user");
    if(fromStorage != null) {
      this.users = JSON.parse(fromStorage).users;
    }
  }

  checkUser(userName: string, password: string){

  }
  onLogIn(){
    let inputLogin = this.login.value;
    let passInput = this.password.value;
    // @ts-ignore
    let res = this.users.find(x=>x.email==inputLogin);
    // @ts-ignore
    if (res != null && res.password == passInput){
        this.router.navigate(['menu']);
    }
  }
  onGuest(){

  }
}
