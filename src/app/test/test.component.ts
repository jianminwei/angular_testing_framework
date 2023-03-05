import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Ts01Service } from '../ts01.service';
import { RxjsObservableService } from '../rxjs-observable.service';
import { RxjsOperatorService } from '../rxjs-operator.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public messageService: MessageService,
    private rx1: RxjsObservableService,
    private rx2: RxjsOperatorService,
    private ts01: Ts01Service
  ) {}

  /**
   * Do your test stuff in ngOnInit()
   */
  ngOnInit(): void {
    this.testRxJs();
    this.testTypeScript01();
  }

  /**
   * ts01 for testing basic TypeScript concepts.
  */
  testTypeScript01() {

    //this.ts01.scopeTest();
    //this.ts01.constTest();   //const array can be changed by adding new elements.
    //this.ts01.variableTest();
    //this.ts01.unionTypeTest(); //A variable can have more than one types, called union type
    //this.ts01.literalTypeTest(); //Typescript can define a variable with a fixed set of literals.
    //this.ts01.arrayTest();
    //this.ts01.tupleTest();
    //this.ts01.dictionaryTypeTest();
    //this.ts01.destructTest();
    //this.ts01.spreadTest();
    //this.ts01.getAverageTest();
    //this.ts01.curryingTest();
    //this.ts01.classTest();
    //this.ts01.getterSetterTest();
    // this.ts01.genericTest();
  }


  testRxJs() {

    /**
     * RxJs Observable test
     */

    //this.rx1.rxjs_test1();
    //this.rx1.rxjs_test1_2();
    //this.rx1.rxjs_test1_3();
    // this.rx1.rxjs_test2();
    //this.rx1.rxjs_test3();
    // this.rx1.rxjs_test3_2();
    // this.rx1.rxjs_test3_3();
    // this.rx1.rxjs_test3_4();
    // this.rx1.rxjs_test4();

    /**
     * RxJs Operator test
     */

    // this.rx2.rxjs_test1();
    // this.rx2.rxjs_test2();
    // this.rx2.rxjs_test3();
    // this.rx2.rxjs_test4();
    // this.rx2.rxjs_test5();
    //this.rx2.rxjs_test6();
  }

  clearMessage() {
    this.messageService.clear();
  }

  hasMessages() {
    return this.messageService.hasMessages();
  }

}
