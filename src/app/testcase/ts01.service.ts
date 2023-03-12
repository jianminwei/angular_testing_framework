import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Song } from '../classes/song';
import { Jukebox } from '../classes/jukebox';
import { WarehouseLocation } from '../classes/warehouseLocation';


@Injectable({
  providedIn: 'root'
})
export class Ts01Service {

  constructor(private logger: MessageService) { }

  scopeTest() {
    let firstName = 'Chris';
    {
      let firstName = 'Tudor';
      this.logger.log('Name 1:' + firstName);
    }

    this.logger.log('Name 2:' + firstName);
  }

  constTest() {
    const digits = [1, 2, 3];

    // Mutable - this changes the value of digits without using an assignment
    digits.push(4, 5, 6);

    this.logger.log(digits);

  }

  variableTest() {

    //In type script, this also called type annotation.
    const v1 = 'abc';
    const v2 = 123;
    const v3: boolean = false;
    const v4: string = 'xyz';

    const names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

    // function annotation with parameter type annotation and return type annotation
    let sayHello: (name: string) => string;

    // implementation of sayHello function
    /**
     * This is very interesting. Although you can define a function within a function,
     * but outside can't call the inner function because you can't get a handle of it.
     * 
     * But you can return the inner function.
     */
    sayHello = function (name) {
      return 'Hello ' + name;
    };

    // object type annotation
    let person: { name: string; heightInCentimeters: number; };

    // Implementation of a person object
    person = {
      name: 'Mark',
      heightInCentimeters: 183
    };

    return sayHello;

  }


  unionTypeTest() {
    let union: boolean | number;

    union = 5;

    this.logger.log(union);

    union = true;

    this.logger.log(union);
  }

  literalTypeTest() {
    type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';

    let kingdom: Kingdom;
    kingdom = 'Chromista';

    this.logger.log(kingdom);

    type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;
    let num: Fibonacci;

    num = 8;

    this.logger.log(num);


    // Hybrid union/literal type
    type Randoms = 'Text' | 10 | false;
    let random: Randoms;
    // OK
    random = 'Text';
    random = 10;
    random = false;

    this.logger.log(random);
  }


  arrayTest() {
    interface Monument {
      name: string;
      heightInMeters: number;
    }

    // The array is typed using the Monument interface
    const monuments: Monument[] = [];

    // Each item added to the array is checked for type compatibility
    monuments.push({
      name: 'Statue of Liberty',
      heightInMeters: 46
    });
    monuments.push({
      name: 'Peter the Great',
      heightInMeters: 96
    });
    monuments.push({
      name: 'Angel of the North',
      heightInMeters: 20
    });

    // The array.sort method expects a comparer that accepts two Monuments
    const monumentsOrderedByHeight = monuments.sort((m1, m2) => m1.heightInMeters - m2.heightInMeters);

    this.logger.log(monumentsOrderedByHeight);

  }

  tupleTest() {
    let poem: [number, boolean, string];

    // OK
    poem = [1, true, 'love'];

    // Error: 'string' is not assignable to 'number'
    //poem = ['my', true, 'love'];

    this.logger.log(poem);

  }


  dictionaryTypeTest() {
    interface Cephalopod {
      hasInk: boolean;
      arms: number;
      tentacles: number;
    }

    interface CephalopodDictionary {
      [index: string]: Cephalopod;
    }

    let dictionary: CephalopodDictionary = {};
    dictionary['octopus vulgaris'] = { hasInk: true, arms: 8, tentacles: 0 };
    dictionary['loligo vulgaris'] = { hasInk: true, arms: 8, tentacles: 2 };


    this.logger.log(dictionary);

  }

  destructTest() {

    const triangles = [1, 3, 6, 10, 15, 21];
    // Destructuring with a rest argument
    const [first, second, ...remaining] = triangles;

    this.logger.log('first: ' + first);
    this.logger.log('second: ' + second);
    this.logger.log('...remaining: ' + remaining);

    const highSchool = { school: 'Central High', team: 'Centaurs' };
    // Object destructuring
    const { school: s, team: t } = highSchool;

    this.logger.log(s);
    this.logger.log(t);

    const pets = { cat: 'Pickle', dog: 'Berkeley', hamster: 'Hammy' }
    // Object destructuring
    const { dog, ...others } = pets;
    // 'Berkeley'
    this.logger.log(dog);
    // Object { cat: 'Pickle', hamster: 'Hammy'}
    this.logger.log(others);

  }

  spreadTest() {
    const squares = [1, 4, 9, 16, 25];
    const powers = [2, 4, 8, 16, 32];

    // Array spreading. This is really powerful.
    const squaresAndPowers = [...squares, ...powers];
    // [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
    this.logger.log(squaresAndPowers);

    // for testing message function output
    this.logger.log((a: string) => { console.log(a) })

    // for testing message Symbol output
    let id = Symbol("id");
    this.logger.log(id);

    const emergencyService = {
      police: 'Chase',
      fire: 'Marshall',
    };
    const utilityService = {
      recycling: 'Rocky',
      construction: 'Rubble'
    };

    // Object spreading
    const patrol = { ...emergencyService, ...utilityService };
    this.logger.log(patrol);
  }

  getAverageTest() {

    const getAverage = function (...nums: number[]): number {
      return nums.reduce((sum, a) => sum + a) / nums.length;
    };

    this.logger.log(getAverage(2, 3, 4, 5))
  }



  curryingTest() {

    // Currying
    const multiply = (a: number) => (b: number) => a * b;

    // Pass both arguments in sequence: 30
    const numA = multiply(5)(6);

    this.logger.log(numA);


    const multiplyBy5 = multiply(5);

    this.logger.log(multiplyBy5(9));

  }



  classTest() {

    const songs = [
      new Song('Bushbaby', 'Megaphone'),
      new Song('Delays', 'One More Lie In'),
      new Song('Goober Gun', 'Stereo'),
      new Song('Sohnee', 'Shatter'),
      new Song('Get Amped', 'Celebrity')
    ];
    const jukebox = new Jukebox(songs);

    this.logger.log(jukebox.play());

  }


  getterSetterTest() {

    const warehouseSlot = new WarehouseLocation(15, 'A6');

    warehouseSlot.stockItem = { asin: 'B001TEQ2PI', description: 'Figure' };

    this.logger.log(warehouseSlot.stockItem);

  }

  reverse<T>(list: T[]): T[] {
    const reversedList: T[] = [];
    for (let i = (list.length - 1); i >= 0; i--) {
      reversedList.push(list[i]);
    }
    return reversedList;
  }


  genericTest() {
    this.logger.log(this.reverse(['a', 'b', 'c', 'd']));
    this.logger.log(this.reverse([1,2,3,4,5]));
    this.logger.log(this.reverse([true, true, false,]));
  }


}
