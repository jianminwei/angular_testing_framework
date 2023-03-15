import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { addCurried, curry, pipe } from './es8-js-functional';

@Injectable({
  providedIn: 'root'
})
export class Fpch6Service {

  constructor(private logger: MessageService) { }

  testAddCurried() {

    let add4 = addCurried(4);

    this.logger.log(add4(2));
    this.logger.log(add4(5));
    this.logger.log(addCurried(5)(6));
  }

  testCurry() {
    let addCurried = curry((a:number,b:number) => a + b);
    let add4 = addCurried(4);
    
    this.logger.log(add4(2));
    this.logger.log(add4(5));
    this.logger.log(addCurried(5)(6)); 

    let multiCurry = curry((a:number,b:number) => a * b);
    let multi5 = multiCurry(5);
    this.logger.log(multi5(6));


    let genericTable = curry((a:number,b:number) => a * b);

    const tableOf2 = genericTable(2);
    const tableOf3 = genericTable(3);
    const tableOf4 = genericTable(4);

    this.logger.log(tableOf4(2));
    this.logger.log(tableOf4(3));
    this.logger.log(tableOf4(4));


  }


  testPipe() {
    let splitIntoSpaces = (str:string) => str.split(" ");
    let count = (array:any[]) => array.length;
    let oddOrEven = (num: number) => ( num % 2 == 0 ? "Even" : "Odd" );

    const oddOrEvenWords = pipe(splitIntoSpaces,count,oddOrEven);

    this.logger.log(oddOrEven(count(splitIntoSpaces("hello your reading about composition"))));

    this.logger.log(oddOrEvenWords("hello your reading about composition"));

  }





}
