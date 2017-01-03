import {Component} from '@angular/core';

// we can use backticks for multiline strings...


  @Component({
    selector: 'my-app',
    template:`
      <h1>Random Quote</h1>
      <random-quote></random-quote>
    `
  })
  export class AppComponent {
  }
