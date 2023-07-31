import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userLog = false;
  @Output()changeLang = new EventEmitter<string>();
  constructor(private storageService: StorageService,) {

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
  }
  onUkClick(){
    this.changeLang.emit('ua');
  }

}
