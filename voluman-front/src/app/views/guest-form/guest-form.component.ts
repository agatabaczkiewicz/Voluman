import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})

export class GuestFormComponent {
  constructor(private fb: FormBuilder, private router: Router,
              private toastService: ToastService) {
  }
  path=[]
  form: FormGroup = this.fb.group({
    name: ['',  Validators.required],
    surname: ['',  Validators.required],
    email: ['',  Validators.required],
    phone:['',  Validators.required],
    city: ['',  Validators.required],
    zip_code: ['',  Validators.required],
    street:['', Validators.required],
    password: ['',  Validators.required],
    passwordConfirm: ['',  Validators.required]
  });
  onSaveClick(){
    this.router.navigate(['login']).then(() => {
      this.toastService.show('Twoje zgłoszenie zostało wysłane', {classname: 'bg-success text-light'});
    })
  }
  onClick(){
  this.router.navigate(['guest-menu'])

  }
}
