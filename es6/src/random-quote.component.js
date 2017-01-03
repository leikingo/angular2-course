import {Component, Inject} from '@angular/core';
import {QuoteService} from './quote.service';

// Decorators/ annotions are not ES6 syntax. It's proposed in future versions => see bable config
  @Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
  export class RandomQuoteComponent{
    // to get the quoteService we need the inject reference (not ES6) => see bable config
    constructor(@Inject(QuoteService) quoteService){
      quoteService.generateRandomQuotes(2000,  quote => this.quote = quote );
    }
  }

