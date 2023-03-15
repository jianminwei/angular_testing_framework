import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Ts01Service } from '../testcase/ts01.service';
import { RxjsObservableService } from '../testcase/rxjs-observable.service';
import { RxjsOperatorService } from '../testcase/rxjs-operator.service';
import { Ts02Service } from '../testcase/ts02.service';
import { Ch2Service } from '../testcase/rxjs-inAction/ch2.service';
import { FpCh3Service } from '../testcase/FP-inJavaScript/fpch3.service';
import { Fpch4Service } from '../testcase/FP-inJavaScript/fpch4.service';
import { Fpch6Service } from '../testcase/FP-inJavaScript/fpch6.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public messageService: MessageService,
    private rx1: RxjsObservableService,
    private rx2: RxjsOperatorService,
    private ts01: Ts01Service,
    private ts02: Ts02Service,
    private ch02: Ch2Service,
    private fpch3: FpCh3Service,
    private fpch4: Fpch4Service,
    private fpch6: Fpch6Service
  ) {}

  /**
   * Do your test cases in ngOnInit()
   */
  ngOnInit(): void {
    // this.testRxJs();
    // this.testTypeScript01();
    // this.testTypeScript02();
    this.testFPinJavaScript();

    // this.testRxJsInAction_Ch2();
  }

  testFPinJavaScript() {
    // this.fpch3.testStringChaining();
    // this.fpch3.testSimpleFunction();
    // this.fpch3.testForEach();
    // this.fpch3.testForEachObject();
    // this.fpch3.testForEachUnless();
    // this.fpch3.testTimes();
    // this.fpch3.testEvery();
    // this.fpch3.testSome();

    // this.fpch4.testClosure2();
    // this.fpch4.testTap();
    // this.fpch4.testTap2();
    // this.fpch4.testUnary();
    // this.fpch4.testOnce();
    //this.fpch4.testMemorized();
    // this.fpch4.testCompose();
    // this.fpch4.testObjectAssign();

    // this.fpch6.testAddCurried();
    // this.fpch6.testCurry();
    this.fpch6.testPipe();
    
  }

  testRxJsInAction_Ch2() {
    this.ch02.ch2_1_Test();
    this.ch02.ch2_1_Test2();

  }

  testTypeScript02() {
    // this.ts02.callBackTest();
    // this.ts02.callBackTest2();
    // this.ts02.callBackTest3();
    // this.ts02.applyTest();
    
  }

  /**
   * ts01 for testing basic TypeScript concepts.
  */
  testTypeScript01() {

    // this.ts01.scopeTest();
    // this.ts01.constTest();   //const array can be changed by adding new elements.
    // this.ts01.variableTest();
    // this.ts01.unionTypeTest(); //A variable can have more than one types, called union type
    // this.ts01.literalTypeTest(); //Typescript can define a variable with a fixed set of literals.
    // this.ts01.arrayTest();
    // this.ts01.tupleTest();
    // this.ts01.dictionaryTypeTest();
    // this.ts01.destructTest();
    // this.ts01.spreadTest();
    // this.ts01.getAverageTest();
    // this.ts01.curryingTest();
    // this.ts01.classTest();
    // this.ts01.getterSetterTest();
    // this.ts01.genericTest();
  }

  testRxJs() {

    /**
     * RxJs Observable test
     */

    // this.rx1.rxjs_test1();
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
    // this.rx2.rxjs_test6();
  }

  clearMessage() {
    this.messageService.clear();
  }

  hasMessages() {
    return this.messageService.hasMessages();
  }

}
