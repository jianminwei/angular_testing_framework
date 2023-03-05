import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, filter, take, delay, tap} from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class Test2Service {

  constructor(private msg: MessageService) { }

  rxjs_test1() {
    /*
    *  'of' allows you to deliver values in a sequence
    *  In this case, it will emit 1,2,3,4,5 in order.
    */
    const dataSource = of(1, 2, 3, 4, 5);

    // subscribe to our source observable
    const subscription = dataSource
      .pipe(
        // add 1 to each emitted value
        map(value => value + 1)
      )
      // log: 2, 3, 4, 5, 6
      .subscribe(value => this.msg.log(value.toString()));
  }

  rxjs_test2() {
    const dataSource = of(1, 2, 3, 4, 5);

    // subscribe to our source observable
    const subscription = dataSource
      .pipe(
        // only accept values 2 or greater
        filter(value => value >= 3)

      )
      // log: 3, 4, 5
      .subscribe(value => this.msg.log(value.toString()));
  }


  rxjs_test3() {
    const dataSource = of(1, 2, 3, 4, 5, 6, 7, 8);

    // subscribe to our source observable
    const subscription = dataSource
      .pipe(
        // only accept values 2 or greater
        filter(value => value >= 4),

        //take 3 from the pipe
        take(3)
      )
      // log: 4, 5, 6
      .subscribe(value => this.msg.log(value.toString()));
  }


  rxjs_test4() {
    const dataSource = of(1, 2, 3, 4, 5, 6, 7, 8);

    // subscribe to our source observable
    const subscription = dataSource
      .pipe(
        // only accept values 2 or greater
        filter(value => value >= 4),

        //take 3 from the pipe
        take(3),

        delay(3000)

      )
      // log: 4, 5, 6
      .subscribe(value => this.msg.log(value.toString()));
  }

  rxjs_test5() {
    const source = of(1, 2, 3, 4, 5);

    // transparently log values from source with 'tap'
    const example = source.pipe(
      tap(val => this.msg.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => this.msg.log(`AFTER MAP: ${val}`))
    );
    //'tap' does not transform values
    //output: 11...12...13...14...15
    const subscribe = example.subscribe(value => this.msg.log(value.toString()));
  }

  rxjs_test6() {
    const source = of(1, 2, 3, 4, 5);

    // tap also accepts an object map to log next, error, and complete
    const example = source
      .pipe(
        map(val => val + 10),
        tap({
          next: val => {
              // on next 11, etc.
              this.msg.log(`on next: ${val}`);
            },
          error: error => {
              this.msg.log(`on error, ${error.message}`);
            },
          complete: () => this.msg.log('on complete')
        })
      )
      // output: 11, 12, 13, 14, 15
      .subscribe(val => this.msg.log(val.toString()));
  }


}
