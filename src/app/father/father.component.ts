import {Component, OnInit, OnChanges} from '@angular/core';
import {ChidTofatherService} from "./../service/chid-tofather.service";
import {RandomService} from "app/service/random.service";
@Component({selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  providers:[RandomService]
})
export class FatherComponent implements OnInit,OnChanges {
  list:string[] = [];
  num:number = 0;
  constructor(private service:ChidTofatherService,private random:RandomService) {
      setInterval(()=>{
        this.num = this.random.num;
      },1000);
   }
  ngOnChanges(){
    
  }
  ngOnInit() {
    this.list = this.service.list;
  }
}
