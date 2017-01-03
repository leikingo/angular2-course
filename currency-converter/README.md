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
*Property binding* does a *One-Way-Binding* from the *Component* to the *View*.

*Event binding* is used to bind a statement to an event for example `<button on-click="update()">`.
The statement is most likely a method of the component.
The more compact syntax is the `()` syntax: `<button (click)="update()">`
*Event binding* does a *One-Way-Binding* from the *View* to the *Component*.

Local template variable can be assigned with the `#` like `<input #exampleField>` and later referenced in this template like `<button (click)=update(exampleField.value)">`.
The value property is passed as a string value here.

To directly propagate an update of an input value, we can use event binding on the `input` event and actually reference the event with `$event`.
The event has a `target` property which identifies the dom element that caused the event.
Therefore we can use its value property to reference the new input value: `<input (input)="update($event.target.value)">`.

*Two-Way-Binding* is a combination of *Property* and *Event binding*.
Instead of binding to a property of the dom element we do a *Property binding* on the angular property `ngModel`, and an *Event binding* on the `ngModelChange` event.
Since the event is now a the actual model value, we also have the target type of the property and not a string value.
Instead of `<input type="number" [ngModel]="componentProperty" (ngModelChange)="update($event)">` where the update method just sets the value of the component property, we can use the compact version `<input [(ngModel)]="componentProperty"`>.
This is called the *Banana in a Box* syntax (`[()]`).