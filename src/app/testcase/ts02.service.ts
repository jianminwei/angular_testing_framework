import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class Ts02Service {

  constructor(private logger: MessageService) { }


  callBackTest() {
    let _this = this;

    function go(callback: (arg: string) => void) {
      callback.call(_this, 'Example Argument');
    }

    function callbackFunction(arg: string) {
      _this.logger.log(arg);
    }

    go(callbackFunction);
  }


  callBackTest2() {
    let _this = this;

    function go(callback: (arg: string) => void) {

      callback.apply(_this, ['Example Argument']);
    }

    function callbackFunction(arg: string) {
      _this.logger.log(arg);
    }

    go(callbackFunction);
  }

  callBackTest3() {
    let _this = this;

    function go(callback: (arg: string) => void) {

      callback('Example Argument');
    }

    function callbackFunction(arg: string) {
      _this.logger.log(arg);
    }

    go(callbackFunction);
  }


  applyTest() {

    const numbers = [3, 11, 5, 7, 2];
    // A fragile way of finding the maximum number
    // const max = Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
    // A solid way to find the maximum
    const max = Math.max.apply(null, numbers);
    
    // 11
    this.logger.log(max);
  }

}
