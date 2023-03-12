import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class RxjsObservableService {


  constructor(private messageService:MessageService) { }

  rxjs_test1() {
    const observable = new Observable((event: any) => {
      event.next('Hey guys!');
    });

    observable.subscribe(
      (x: any) => this.messageService.log(x)
    );
  }

  rxjs_test1_2() {
    const observable = of('Hey guys!');

    observable.subscribe(
      (x: any) => this.messageService.log(x)
    );
  }



  rxjs_test1_3() {
    of('Hey guys!').subscribe(
      (x: any) => this.messageService.log(x)
    );
  }

  rxjs_test2() {
    const observable = new Observable((event: any) => {
      event.next('Hey guys!');
      event.next('How are you?');
      event.complete();
      event.next('This will not send');
    });

    observable.subscribe(
      (x: any) => this.messageService.log(x)
    );
  }


  rxjs_test3() {
    const observable = new Observable((event: any) => {
      event.next('Hey guys!');
      event.next('How are you?');
      event.complete();
      event.next('This will not send');
    });

    observable.subscribe({
      next: (x: any) => this.messageService.log(x),
      error: (err: any) => this.messageService.log(err),
      complete: () => this.messageService.log('Completed')
    }
    );
  }

  rxjs_test3_2() {
    const observable = new Observable((event: any) => {
      event.next('Hey guys!');
      event.next('How are you?');
      event.complete();
      event.next('This will not send');
    });

    observable.subscribe({
      next: (x: any) => this.messageService.log(x),
    }
    );
  }

  rxjs_test3_3() {
    const observable = new Observable((event: any) => {
      event.next('Hey guys!');
      event.next('How are you?');
      event.complete();
      event.next('This will not send');
    });

    observable.subscribe({
      error: (x: any) => this.messageService.log(x),
    }
    );
  }

  rxjs_test3_4() {
    const observable = new Observable((event: any) => {
      event.next('Hey guys!');
      event.next('How are you?');
      event.complete();
      event.next('This will not send');
    });

    observable.subscribe({
      complete: () => this.messageService.log('Completed')
    }
    );
  }


  rxjs_test4() {
    const observable = new Observable((event: any) => {

      try {
        event.next('Hey guys!');
        event.next('How are you?');
        setInterval(() => {
          event.next('I am good')
        }, 2000)
      } catch (err) {
        event.error(err)
      }
    });

    const observer = observable.subscribe({
      next: (x: any) => this.messageService.log(x),
      error: (error: any) => { this.messageService.log(error) },
      complete: () => { this.messageService.log('completed') }
    });

    setTimeout(() => {
      observer.unsubscribe();
    }, 8005);
  }
}
