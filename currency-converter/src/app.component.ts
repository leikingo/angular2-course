import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';


@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"
      [class.error]="isInvalid(baseAmount)"> 
    <currency-select [(selected)]="baseCurrency"></currency-select>
    = <strong>{{targetAmount | fixed:3 }}<strong>
    <currency-select [(selected)]="targetCurrency"></currency-select>
    <p *ngIf="isInvalid(baseAmount)">Please enter a valid amount</p>
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error {
      background-color: #ff6666;
    }
  `]
})
export class AppComponent {

  baseCurrency = 'GBP';
  targetCurrency = 'EUR';
  baseAmount = 1;

  // creates a private property and assignes its value according to the parameter
  // the ExchangeService is created via the providers in the AppModule
  constructor(private exchangeService: ExchangeService){
  }

  get targetAmount() {
    const exchangeRate = this.exchangeService
      .getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  }

  isInvalid(value){
    return !Number.isFinite(value);
  }
}
