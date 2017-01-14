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

