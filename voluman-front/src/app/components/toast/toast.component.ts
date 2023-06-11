
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbToast, NgbToastModule} from '@ng-bootstrap/ng-bootstrap'
import { fromEvent, take } from 'rxjs';
import {EventTypes} from "../../models/models";
import {ToastService} from "../../services/toast.service";


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  host: {'[class.ngb-toasts]': 'true'},
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) {}

  ngOnInit() {

  }

  isTemplate(toast:any) { return toast.textOrTpl instanceof TemplateRef; }
}
