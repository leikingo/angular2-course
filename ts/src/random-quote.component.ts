import { Component } from '@angular/core';
import { QuoteService } from './quote.service';
import {Quote} from './quote.model';

@Component({
  selector: 'random-quote',
  template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
})
export class RandomQuoteComponent {

  // class properties must be declared upfront -> this.quote
  // without type declaration, we implicitly declare the type "any"
  quote;

  // instead of @Inject specifying the type, we can just specify the type directly
  constructor(quoteService: QuoteService) {
    quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }

}
