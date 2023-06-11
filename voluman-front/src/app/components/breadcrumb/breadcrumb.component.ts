import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {


  @Input("path") path: string[] =[];
  @Input('back')backUrl:string="";
  constructor(private router:Router) {
  }

  onClick(){
    this.router.navigate([this.backUrl]);
  }
}
