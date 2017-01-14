# Quote Of The Day

A simple Angular 2 web application that displays a quote. Demonstrates how to use the HTTP client.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

This example is part of the **Angular 2 From The Ground Up** course by Mirko Nasato.


## Learnings

We can use angulars `HttpModule` for HTTP request.
Instead of import and declare on the Http service, we can import the complete `HttpModule` in the `imports` property of `NgModule`.
To inject a services, in this case the Http service, in a custom service, the custom service class must be annotated with `@Injectable`.
