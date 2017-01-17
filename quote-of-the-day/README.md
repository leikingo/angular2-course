# Quote Of The Day

A simple Angular 2 web application that displays a quote. Demonstrates how to use the HTTP client.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

This example is part of the **Angular 2 From The Ground Up** course by Mirko Nasato.


## Learnings

We can use angulars `HttpModule` for HTTP request.
Instead of import and declare on the Http client, we can import the complete `HttpModule` in the `imports` property of `NgModule`.
To inject a services, in this case the Http client, in a custom service, the custom service class must be annotated with `@Injectable`.

The Http Client provides different method for each type of request, like `http.get(url)`.
It returns an `Observable<Response>` and therefore is an asynchronous operation.
To get all methods of the `RxJS`, we also need to import `rxjs/Rx`.
For single operations, only these can be imported as an optimization, like `import 'rxjs/add/operator/toPromise';`.
Imports are available to all components , thus it should/ could be imported in `main.ts` as well.
To deal with undefined variables in the asynchronous processing we can use the safe navigation operator `.?` in template expressions.


`Promises` are an ES6 feature for asynchronous processing.
For example for an HTTP request, we need to wait till the response comes back.
One possibility is using callbacks, but these are not very flexible and lead to deep nesting when we need the result of one async method as input for the next.
In addition, we need additonal callbacks for error handling.
`Promises` take a resolve function which calculates the result, which then is passed to the `then` method.
Example: `add(x,y): Promise<number> { return new Promise( resolve => resolve(x+y));}`
In constrast to callbacks, `Promises` can be chained by adding multiple `then` steps like `.then( result => ...).then( result => ...)`.
`then` steps can return another `Promise` or an immediate result, also with a different return type.
To simplify error handling, we can catch error as the last step in the promise chain with `.catch(error => ...)`.
The promise can signalize an error via a second parameter called `reject`.

```
add(x,y): Promise<number> {
    return new Promise( resolve, reject ) => {
        setTimeout(() => {
            const result = x+y;
            if ( result >= 0 ){
                resolve(result);
            } else { // error when negative
                reject('invalid value: ' + result);
            }
        }, 100);
    });
}

add(3,2)
    .then( result => add(result, 5))
    .then( result => add(result, -2))
    .then( result => {
        console.log("final result:", result);
    })
    .catch(error => console.error("error:", error);)
```

To handle an error in an intermediate step, we can process this with a second function of the `then` function.
For final steps that should be executed even after a catch operation, we can add another `then` call without a result: `.catch(error => ...).then( () => finalOperation());`


In addition to `Promises` Angular often uses *RxJS* `Observables` for example for the HTTP client.
`Observables` are more powerful than `Promises` as they can return more than just a single result, like a stream of values for example.

```
add(x,y): Observable<number> {
    return new Observable.create( observer => {
        setTimeout(() => {
            const result = x+y;
            if ( result >= 0 ){
                observer.next(result);
                observer.complete();
            } else { // error when negative
                observer.error('invalid value: ' + result);
            }
        }, 100);
    });
}

add(3,2)
    .mergeMap( result => add(result, 5))
    .mergeMap( result => add(result, -2))
    .finally( () => finalOperation())
    .subscribe( result => ..., error => ...)
```

For chaining Observables we use `map()` for returning immediate results, or `mergeMap()` for returning another Observable.
`subscribe` is always used as the last operation as it will trigger the observable to be executed.
`map`, `mergeMap`, `finally`are only intermediate operations that return another `Oberservable`.
For simple operations, that calculate only a single value, the conversion to a `Promise` might be the easier solution.
`Observables` can/ should be used for creating a stream of values.

```
countDown(start): Observable<number> {
    return Observable.timer(1, 1000)
        .map( x => start - x )
        .takeWhile( x => x > 0);
}

countDown(5)
    .subscribe(result => this.result = result, null, () => this.result = 'Complete');

```

