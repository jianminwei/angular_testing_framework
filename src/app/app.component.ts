import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3> {{title}}</h3>
    <p style="font-size: smaller; margin-bottom: 2rem;">You can test JavaScript, TypeScript, RxJs or anything you can do with JavaScript and TypeScript.</p>
    <app-test></app-test>  
  `
})
export class AppComponent {
  title = 'Angular Testing Framework';
}
