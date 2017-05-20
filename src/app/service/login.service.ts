import { Injectable } from '@angular/core';
/**
 * 创建一个打印日志的服务,
 * 包括三个方法
 * @export
 * @class LoginService
 */
@Injectable()
export class LoginService {

  constructor() { }
  public info(message:any){
    console.info(message);
  }
  public warn(message:any){
    console.warn(message);
  }
  public error(message:any){
    console.error(message);
  }
}
