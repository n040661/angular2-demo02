import { Component, OnInit } from '@angular/core';
import {ChidTofatherService} from "./../service/chid-tofather.service";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  inputText:string = "";
  constructor(private service:ChidTofatherService) { }

  ngOnInit() {
  }
  add(){
    this.service.append(this.inputText);
    this.inputText = "";
  }
}
