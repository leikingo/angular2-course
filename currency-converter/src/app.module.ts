import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrencySelectComponent } from './currency-select.component';
import { ExchangeService } from './exchange.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [ExchangeService],
  declarations: [AppComponent, CurrencySelectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
