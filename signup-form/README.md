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
We need to disable HTML5 basic form validation via `<form novalidate>` and use angular support for it instead.
When we bind an input element with `[(ngModel)]`, angular automatically adds some classes like `ng-pristine`, `ng-invalid`, `ng-touched` etc..
Some classes are removed or added when interaction takes places.
For example `ng-pristine` changes to `ng-dirty` is added after a field is modified, `ng-untouched` changes to `ng-touched` when the input fields focus is lost, and `ng-valid`/ `ng-invalid` indicates if an input field is valid.

To reference input fields with angular we can declare in input field with a local variable like `<input #emailField ...>`.
This actually reference the dom element and we could check for the existence of certain classes to display error messages etc..
It is better to directly reference the ngModel instance for the field, by assigning the local varaible to `ngModel`.
This ngModel instance has also the fields like `pristine`, `touched` etc. and can therefore be used for validation as well with the `invalid` property.
By using the ngModel property `errors` we can also differentiate between the validation/ error types like `required` or `pattern`. 
