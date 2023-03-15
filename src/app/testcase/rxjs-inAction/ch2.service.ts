import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';


@Injectable({
  providedIn: 'root'
})
export class Ch2Service {

  constructor(private logger: MessageService) { }

  /**
   * This is a very good test to use:
   * 1. Array filter, map and reduce functions.
   * 2. Pass isEven, square and add functions as argument.
   */
  ch2_1_Test() {
    const isEven = (num: number) => num % 2 === 0;
    const square = (num: number) => num * num;
    const add = (a: number, b: number) => a + b;

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.logger.log( arr.filter(isEven).map(square).reduce(add) );

  }

  /**
   * This test achieve the same result. But it pass function literal as argument.
   */
  ch2_1_Test2() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.logger.log( arr.filter(a => a % 2 === 0).map(a => a * a).reduce( (a,b) => a + b) );
  }




}
