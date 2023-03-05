import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  log(message: any) {
    switch (typeof message) {
      case 'string':
        this.messages.push(message);
        break;
      case 'number':
        this.messages.push(message.toString());
        break;
      case 'boolean':
        this.messages.push(message.toString());
        break;
      case 'undefined':
        this.messages.push('undefined');
        break;
      case 'bigint':
        this.messages.push(message.toString());
        break;
      case 'object':
        this.messages.push(JSON.stringify(message));
        break;
      case 'function':
        this.messages.push(message);
        break;
      case 'symbol':
        this.messages.push(message.toString());
        break;
      default:
        this.messages.push(JSON.stringify(message));
        break;
    }

  }


  clear() {
    this.messages = [];
  }

  hasMessages(): boolean {
    return this.messages.length > 0;
  }

}
