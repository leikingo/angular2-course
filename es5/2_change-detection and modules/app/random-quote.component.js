(function(app) {

    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;

    app.RandomQuoteComponent = Component({
        selector: 'random-quote',
        template: '<em>{{quote.line}}</em> - {{quote.author}}'
    }).Class({
        constructor: [QuoteService, function RandomQuoteComponent(quoteService){
            var self = this;
            quoteService.generateRandomQuotes(3, 2000, function(quote){
                self.quote = quote; // change is automatically detected and display is updated
            });
        }]
    });


})(window.app || (window.app = {})); // create namespace when not exists
