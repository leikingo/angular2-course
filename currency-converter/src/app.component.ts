import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"> USD = 
    <strong>{{targetAmount}}<strong> GBP
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
  `]
})
export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;

  get targetAmount() {
    // this is actually called multiple times for each change... :-(
    return this.baseAmount * this.exchangeRate;
  }

}
