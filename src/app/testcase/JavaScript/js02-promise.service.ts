import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { computeSqrtAsync, computeSync, computeAsync } from './js-obj-function';

@Injectable({
  providedIn: 'root'
})
export class Js02PromiseService {

  constructor(private logger: MessageService) { }

  testPromise() {
    const forNegative1 = computeSqrtAsync(-1);
    const forZero = computeSqrtAsync(0);
    const forSixteen = computeSqrtAsync(16);

    const reportOnPromise = (promise: any) => {
      promise
        .then((result: any) => this.logger.log(`result is ${result}.`))
        .catch((error: any) => this.logger.log(`ERROR: ${error}`));
    };

    reportOnPromise(forNegative1);
    reportOnPromise(forZero);
    reportOnPromise(forSixteen);
  }


  //The purpose of this test is to show that
  //synchronous coding pattern is different from
  //asynchronous coding pattern. And that cause our thinking
  //differently.
  testSyncVsPromise() {

    const callComputeSync = (number: any) => {
      try {
        const result = computeSync(number);
        this.logger.log(`Result is ${result}`);
      } catch (ex: any) {
        this.logger.log(ex.message);
      }
    }

    const callComputeAsync = (number: any) => {
      computeAsync(number)
        .then(result => this.logger.log(`Result is ${result}`))
        .catch(err => this.logger.log(err));
    }

    //You can see with async/await, the pattern is identical
    //to synchronous 
    const callCompute = async (number: number) => {
      try {
        const result = await computeAsync(number);
        this.logger.log(`Result is ${result}`);
      } catch (ex) {
        this.logger.log(ex);
      }
    }

    callComputeSync(100);
    callComputeAsync(200);
    callCompute(300);
  }


}
