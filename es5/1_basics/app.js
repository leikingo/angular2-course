(function() {

    // define aliases to reduce code
    var Class = ng.core.Class;
    var Component = ng.core.Component;
    var bootstrap = ng.platformBrowserDynamic.bootstrap;

    // defines a service which is 'just' a simple class
    var QuoteService = Class({
        constructor: function QuoteService(){ // ES5 name the constructors for better error messages, should be named like the class
            this.quotes = quotes;
        },
        getRandomQuote: function() {
            var randomIndex = Math.floor(Math.random() * quotes.length);
            return this.quotes[randomIndex];
        }
    }); 

    var MockQuoteService = Class({
        extends: QuoteService,
        constructor: function(){},
        getRandomQuote: function(){
            return { line: 'A mock quote', author: 'Mock Author'}
        }
    });


    // each component is presented as a class
    // components are used to display stuff
    // defines template, class (logic), metadata
    var RandomQuoteComponent = Component({
        selector: 'random-quote', // defines the html tag
        template: '<em>{{quote.line}}</em> - {{quote.author}}' // html replacement, template expression is replaced
    }).Class({
        constructor: [QuoteService, function RandomQuoteComponent(quoteService){ // DI for ES5 needs array syntax
            // could also be instantiated manually 
            // var quoteService = new QuoteService();
            this.quote = quoteService.getRandomQuote();
        }]
    });


    
    var AppComponent = Component({
        selector: 'my-app',
        providers: [
            {
                provide: QuoteService, 
                useClass: QuoteService
            }
            // instantiate global services, short syntax is "providers: [QuoteService]
            //  could be replaced be other classes as the implementation like MockQuoteService
            // instead of useClass we can use 'useValue=new MockQuoteService()'
            //  or 'useFactory: function(){ return new MockQuoteService(); }''
        ], 
        directives: [RandomQuoteComponent], // reference needed components
        template: '<h1>Random quote!</h1>' +
            '<p><random-quote></random-quote></p>' 
    })
    .Class({
        constructor: function AppComponent(){
            // empty
        }
    });

    

    document.addEventListener('DOMContentLoaded', function() {
        // startup angular, which replaces all custom components
        // specifies the main component
        bootstrap(AppComponent);
    });

    var quotes = [
        {
        "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "author": "Brian W. Kernighan"
        },
        {
        "line": "Walking on water and developing software from a specification are easy if both are frozen.",
        "author": "Edward V Berard"
        },
        {
        "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
        "author": "Hofstadter's Law"
        },
        {
        "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        "author": "Rick Osborne"
        },
        {
        "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
        "author": "Jan L. A. van de Snepscheut"
        },
        {
        "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        "author": "Bill Gates"
        },
        {
        "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
        "author": "Leon Bambrick"
        },
        {
        "line": "Nine people can't make a baby in a month.",
        "author": "Fred Brooks"
        },
        {
        "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        "author": "Edsger Dijkstra"
        },
        {
        "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
        "author": "Tom Cargill"
        }
    ];

})();
