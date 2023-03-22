import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class Js01ObjectFuncsService {

  constructor(private logger: MessageService) { }

  testObjectCreate() {

    const job = {
      position: 'cashier',
      type: 'hourly',
      isAvailable: true,
      showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        return `The ${this.position} position is ${this.type} and ${accepting}.`;
      }
    }

    // Use Object.create to pass properties
    const barista = Object.create(job);

    barista.position = "barista";
    this.logger.log(barista.showDetails());
  }

  testObjectKeys() {
    // Initialize an object
    // Note: we have to use ":{ [index: string]: string }" called index signature in TypeScript
    // to describe the object. 
    const employees: { [index: string]: string } = {
      boss: 'Michael',
      secretary: 'Pam',
      sales: 'Jim',
      accountant: 'Oscar'
    };

    // Get the keys of the object
    const keys: string[] = Object.keys(employees);
    this.logger.log(keys);

    keys.forEach(k => this.logger.log(employees[k]));
  }

  testObjectVAlues() {
    // Initialize an object
    const session = {
      id: 1,
      time: `26-July-2018`,
      device: 'mobile',
      browser: 'Chrome'
    };

    // Get all values of the object
    this.logger.log(Object.values(session));
  }

  testObjectEntries() {
    // Initialize an object
    const operatingSystem = {
      name: 'Ubuntu',
      version: 18.04,
      license: 'Open Source'
    };

    this.logger.log(Object.entries(operatingSystem));

    Object.entries(operatingSystem).forEach((k,v) => this.logger.log(`${k}, ${v}`));

  }

  testObjectAssign() {
    // Initialize an object
    const name = {
      firstName: 'Philip',
      lastName: 'Fry'
    };

    // Initialize another object
    const details = {
      job: 'Delivery Boy',
      employer: 'Planet Express'
    };

    // Merge the objects
    const character = Object.assign(name, details);
    this.logger.log(character);

    // You can use object spread also
    const character2 = {...name, ...details};
    this.logger.log(character2);
  }


}
