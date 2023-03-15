import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { tap, forEach, unary } from './es8-functional';
import { once, memoized, compose } from './es8-js-functional';

@Injectable({
  providedIn: 'root'
})
export class Fpch4Service {

  constructor(private logger: MessageService) { }

  /**
   * Simply put, a closure is an inner function. So what is an inner function? 
   * It is just a function within another function, something like the following.
   * 
   * Yes, that’s exactly what a closure is. The function inner is called a
   * closure function.
   * 
   * Closure is powerful because of its access to the scope
   * chains (or scope levels).
   * 
   * Technically the closure has access to three scopes:
   *  1. Variables that are declared in its own declaration.
   *  2. Access to the global variables.
   *  3. Access to the outer function’s variable (interesting).
   */

  testClosure() {
    function outer() {
      function inner() {
      }
    }
  }

  /**
   * Another interesting thing.
   * Below testClosure2() is a method of Fpch4Service class. This method provides a outer
   * scope(like global scope) for "fn" and "innerFn", and both of them have access to 
   * this.logger. This is amazing.
   */
  testClosure2() {
    const fn = (arg: any) => {
      this.logger.log('fn() is executed');

      let outer = "Visible"
      let innerFn = () => {
        this.logger.log(outer)
        this.logger.log(arg)
      }
      return innerFn
    }

    let innerF = fn(5);
    innerF();
  }

  testTap() {
    tap("fun")((it) => this.logger.log("value is " + it));
  }

  testTap2() {
    forEach([1, 2, 3], (a) =>
      tap(a)(() => {
        this.logger.log(a)
      }
      )
    )
  }

  testUnary() {
    this.logger.log(['1', '2', '3'].map(unary(parseInt)))

  }

  testOnce() {
    const doPayment = once((a: any) => this.logger.log(a), "hello world")

    doPayment();

    //oops bad, we are doing second time!
    doPayment();

  }

  testObjectAssign() {
    let a = { name: "srikanth" };
    let b = { age: 30 };
    let c = { sex: 'M' };

    let nativeObjectAssign = Object.assign({}, a, b, c);

    this.logger.log(nativeObjectAssign);

    this.logger.log(Object.getOwnPropertyNames(nativeObjectAssign));
  }

  testMemorized() {
    let fastFactorial = memoized((n: number) => {
      if (n === 0) {
        return 1;
      }
      // This is it! Recursion!!
      return n * fastFactorial(n - 1);
    })

    this.logger.log(fastFactorial(5));

  }


  testCompose() {
    let splitIntoSpaces = (str:string) => str.split(" ");
    let count = (array:any[]) => array.length;

    const countWords = compose(splitIntoSpaces, count);

    this.logger.log(countWords("hello your reading about composition"));
  }

}
