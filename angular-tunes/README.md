# Angular Tunes

An Angular 2 application that displays artists and albums.
Used to show how to use the Router to navigate between different components.
Sample data courtesy of [MusicBrainz](https://musicbrainz.org/).

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

This example is part of the **Angular 2 From The Ground Up** course by Mirko Nasato.


Learnings

To show/ bind properties that contain HTML we should bind to the `[innerHTML]` property of the dom element instead of using the double `{{` syntax.

`@Input()` bindings are set after the constructor has been called the component has been created.
To handle input properties they must be handled after the component was created via the lifecycle hook method `ngOnInit`. 

If we have multiple *if/else* blocks in the template HTML, we could replace this with the combination of `[ngSwitch]=prop` and the `*ngSwitchCase` directive.
Simple linking between component might be done via showing and hiding different elements on the page.
But this have multiple downsides like not working back button or missing direct linking since the URL does not change.
In addition we need additional properties and events to track the current state of the components.
