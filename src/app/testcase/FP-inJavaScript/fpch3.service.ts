import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { forEach, forEachObject, unless, times, every, some } from './es8-functional';


@Injectable({
  providedIn: 'root'
})
export class FpCh3Service {

  constructor(private logger: MessageService) { }

  /**
   * String chaining seems so simple. But it follows the "Function Chaining" design pattern.
   */
  testStringChaining() {
    let s = 'Functional Programming'.substring(0, 10).toLowerCase() + ' is fun';
    this.logger.log(s);
  }

  /**
   * Three ways of defining functions in JS.
   */
  testSimpleFunction() {
    const simpleFn = () => "Simple Function";   // a function is a piece of data, 
    //you can hold it in a variable.
    const simpleFn2 = function () { return "Simple Function2" };
    function simpleFn3() { return "Simple Function3" };
    this.logger.log(simpleFn());
    this.logger.log(simpleFn2());
    this.logger.log(simpleFn3());
  }

  testForEach() {
    let array = [1, 2, 3];
    forEach(array, (e) => this.logger.log(e));
    forEach(array, (e) => this.logger.log(2 * e));
  }

  testForEachObject() {
    let object = { a: 1, b: 2 }
    forEachObject(object, (k, v) => this.logger.log(k + ":" + v))
    forEachObject({ name: "Foo", age: 25, address: "123 Main St." }, (k, v) => this.logger.log(k + ":" + v))
  }

  testForEachUnless() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    forEach(arr, (n) => {
      unless((n % 2), () => {
        this.logger.log(n + " is even")
      })
    })
  }

  testTimes() {
    times(20, (n) => {
      unless(n % 2, () => {
         this.logger.log(n + " is even");
      });
    });
  }

  testEvery() {
    this.logger.log(every([NaN, NaN, NaN], isNaN));
    this.logger.log(every([NaN, NaN, 4], isNaN));

    this.logger.log(every([100, 200, 300, 400, 500], (a) => a >= 100 ))
  }

  testSome() {
    this.logger.log(some([100, 200, 300, 400, 500], (a) => a > 400 ))
  }

}
