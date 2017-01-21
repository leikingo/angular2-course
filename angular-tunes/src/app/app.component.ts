import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container" [ngSwitch]="state" >
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { 

}
