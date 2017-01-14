import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quote.model';


@Injectable()
export class QuoteService {

  constructor(private http: Http){

  }

  getQuoteOfTheDay(): Quote {
    return {
      "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "author": "Brian W. Kernighan"
    };
  }

}
