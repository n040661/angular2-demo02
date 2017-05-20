import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  public num:number;
  constructor() {
    this.num = Math.random();
   }

}
