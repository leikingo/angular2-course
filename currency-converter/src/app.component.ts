import { Component } from '@angular/core';

// Interpolation can be done via the double curly braces syntax.
// for actual property binding we can use the long syntax `bind-value`
// or the `[value]` syntax.
// Reminder: input['value'] = baseAmount

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [value]="baseAmount" #baseAmountField> USD = 
    <strong>{{targetAmount}}<strong> GBP
    <button (click)="update(baseAmountField.value)">Update</button>
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
  targetAmount = 0.70;

  update(baseAmount) {
    // type of baseAmount is string
    this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
  }

}
