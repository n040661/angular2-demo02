import { Injectable } from '@angular/core';
//引入服务
import {LoginService} from "./login.service";
@Injectable()
export class ChidTofatherService {
  list:string[] = [];
  //在构造函数中注入所依赖的服务
  constructor(private _login:LoginService) { }
  append(str:any){
    this._login.info(`你输入的是:${str}`);
    this.list.push(str);
  }
}
