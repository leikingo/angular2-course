# Sign Up Form

A simple sign up/registration form in Angular 2. Used to demonstrate form validation.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

This example is part of the **Angular 2 From The Ground Up** course by Mirko Nasato.


Learnings

For using forms, we need to import the `FormsModule` from `@angular/forms` in `app.module.ts` and also declare the dependency in the `package.json` file.
When a forms input field is bound to a component property via two-way-binding, the input element must be named as well.
This is needed for angular to identify the field in the form.
To submit a form, bind the `submit` event of the form via `(submit)=onSubmit()`.
If we want to write an application that should be run on all the different browsers, we cannot rely on HTML5 form validation.