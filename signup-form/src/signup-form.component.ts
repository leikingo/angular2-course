import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit(emailField)" novalidate>
      <div class="form-group">
        <label>E-Mail</label>
        <input type="email" class="form-control" #emailField
          [(ngModel)]="email" name="email" required pattern=".+@.+">
          <p *ngIf="false" class="alert alert-danger">Please enter a valid email</p>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  `,
  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
export class SignupFormComponent {

  email = '';

  onSubmit(emailField) {
    console.log('emailField:', emailField);
    //console.log('should submit:', this.email);
  }

}
