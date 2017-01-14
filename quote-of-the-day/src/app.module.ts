import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { QuoteService } from './quote.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
