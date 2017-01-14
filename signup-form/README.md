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

To check the overall form status we can use the `ngForm` instance, which is automatically added to a from when the `FormsModule` is imported.
By assigning this `ngForm` instance to a local template variable like `<form #form="ngForm">` we can reference it for further validation for instance.
Instead of using the `(submit)` event of a form, we can also bind to the `(ngSubmit)` event which is emitted be the `ngForm` instance.
To reset a form, we can use the `ngForm.resetForm()`, which also set the default classes like `ng-pristine` and `ng-untouched`.

Custom Directives are created like custom components but with the `@Directive` annotation.
The selector for directives is typically written with *CamelCasing* cause it is most likely used as a custom dom attribute/ property and as an element itself.
Directives often needs a reference to the dom element which is hosting the directive.
Therefore the `ElementRef` can be injected to the constructor; the dom element is referenced by `elementRef.nativeElement`.
To implement one-way-binding to a value, we can use `@Input() myValue`, just like with custom components, and then bind it with `<input ... [myValue]="myProp">`
When the directives name and the input property have the same name, we can directly instantiate the directive itself bind to the dom element and bind a component property value with the directives property: `<input [myDirective]="myProp">`.
As an alternative we could also name the input reference with the directives name: `@Input('myModel') model;`.
Instead of assigning the input value to the directive element in `ngOnInit` (which results in a one shot set), the input property should be defined as a setter of the directive: ` @Input('myModel') set model(value){ this.element.value = value;}`
This setter is always called when the bound property was changed.

To support *Two-Way-Binding* and thus reflect changes which are made to dom elments input field, we use a `HostListener`.
The *HostListener* can be used to subscribe to events from the element hosting the directive like the `input` event with `@HostListener('input')`.
When ever the event is fired the annotated method will be called.
To notify about the changes, we use an event emitter in this listener method, to emit the changes.
We define the `@Output()` event emitter with the name "property+Change", to allow the *banana in a box* syntax, just like for custom components.