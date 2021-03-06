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

For better routing we need to use the angular *Router* Module, which must be added to the package dependencies with `@angular/route`.
Routes should be declared in a seperate file like `app.routing.ts`.
In contrast to the other angular modules the *RouterModule* does not have to be declared in the `AppModule`.
Instead we could set routes via the method `RouterModule.forRoot` to pass an array of routes.

```
export const routing = RouterModule.forRoot([
    {
        path: '...',
        component: ...,
    }
]);
```

The `routing` object must then be imported in the `AppModule` in the imports array.
Additional we should declare a location strategy, which can be for example the `HashLocationStrategy` or the `PathLocationStrategy`.
The `HashLocationStrategy` uses the hash part of the URL to map the routes, the root path is always the same, typically `/`.
With `HashLocationStrategy` url query parameters are also part of the urls hash.

The `PathLocationStrategy` uses the path of the URL, which is the default in angular in therefore don't need to be set explicitly.
The benefit of this scheme is that the path really references the ressource and also the query parameters are actually used.
This strategy makes use of the browsers *Session history management*/ *HTML5 Push State* API, which allows manipulating the browsers history via JS.
To get the `PathLocationStrategy` working, the `base href` must set in the head part of `index.html`, mostlikely to `<base href='/'>`.
In addition the webserver must also be reconfigured to always return the same `index.html` file for different locations.
For the webpack dev server, we need to set the `historyApiFallback` to true.

Finally we need to place the `<router-outlet>` element in the the app component template as the container for the different routes/ views.
For the actual linking, instead of using an direct `href` we should use the `[routerLink]` directive.
Route parameters are defined after a `:` in the routers path like `artists/:artistId`.
The `routerLink` directive takes these route parameters as different arguments in its value like `[routerLink]=['/artists', artist.id]`
Components that should  handle the route parameters can use the `ActivatedRoute` parameter, which can be injected in the components constructor.
The actual parameters are in the `ActivatedRoute` property `route.snapshot.params`.
This could only be used for the initial load since changes to the url do not always lead to the instantiation of a new component (the same component might be used again).
To listen to url changes we should subcribe to the `ActivatedRoute` property `params` which is an `Observable`.
To avoid memory leaks we must also `unsubscribe` from this subscription, usually in the `ngOnDestroy` callback method.

For protecting routes for example to hide pages that are not visible for user that are not logged in, routes can be provided with guards.
A guard is a class implementing the interface `CanActivate`, which requires a method `canActivate` that returns either `true`or `false`for indication if a route can be activated.
The property `canActivate` from the route object, then references an array of guards, that will be checked when the route is activated.
