import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userLog = false;
  @Output()changeLang = new EventEmitter<string>();
  constructor(private storageService: StorageService,
              private translateService: TranslateService) {
    // let user= this.storageService.getData("user");
    // if(user=="true"){
    //   this.userLog=true;
    // }

  }

  ngOnInit() {
    this.storageService.currentMessageSubscriber.subscribe((data : any)=>{
      // if(data.isRefresh ){
        this.userLog=data.isRefresh;
      // }
  })
  }

  onPlClick(){
    this.changeLang.emit('pl');
    // this.translateService.use('pl');
  }
  onUkClick(){
    this.changeLang.emit('uk');
    // this.translateService.use('uk');

  }

}
