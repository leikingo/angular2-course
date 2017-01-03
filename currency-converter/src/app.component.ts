import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [ngModel]="baseAmount" 
     (ngModelChange)="update($event)"> USD = 
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

  update(baseAmount) {
    console.info("baseAmount:", baseAmount, "as a", typeof baseAmount);
    this.baseAmount = baseAmount;
  }

  get targetAmount() {
    return this.baseAmount * this.exchangeRate;
  }

}
