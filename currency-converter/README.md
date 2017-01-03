# Currency Converter

An Angular 2 web application that converts between different currencies. Used to demonstrate template features.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

This example is part of the **Angular 2 From The Ground Up** course by Mirko Nasato.



Learnings:

CSS styles can be directly attached to a component via the styles property of `@Component`.
Styles are isolated from the rest of the application.

Interpolation of component properties via the `{{<componentProperty}}` syntax.

*Property binding* is used to bind an expression to a dom element property, for example `<input bind-value="componentProperty">`, where `value`is the dom element property.
The more compact syntax is the `[]` syntax: `input['<elementDomProperty>'] = <componentProperty>`.
Angular will automatically update the dom property to reflect the same value of the expresseion.
Basically interpolation and property binding are the same, but for none element attributes it is shorter to use the `{{}}` syntax.

*Event binding* is used to bind a statement to an event for example `<button on-click="update()">`.
The more compact syntax is the `()` syntax: `<button (click)="update()">`

Local template variable can be assigned with the `#` like `<input #exampleField>` and later referenced in this template like `<button (click)=update(exampleField.value)">`.
The value property is passed as a string value here.

