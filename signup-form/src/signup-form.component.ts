import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit(emailField)" novalidate>
      <div class="form-group">
        <label>E-Mail</label>
        <input type="email" class="form-control" #emailField="ngModel"
          [(ngModel)]="email" name="email" required pattern=".+@.+">
        <p *ngIf="emailField.touched && emailField.invalid && emailField.errors.pattern" 
            class="alert alert-danger">Please enter a valid email.</p>
        <p *ngIf="emailField.touched && emailField.invalid && emailField.errors.required" 
            class="alert alert-danger">Email is required.</p>
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

  onSubmit(emailField: NgModel) {
    console.log('emailField.errors:', emailField.errors);
    //console.log('should submit:', this.email);
  }

}
