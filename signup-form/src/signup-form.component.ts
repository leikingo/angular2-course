import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (ngSubmit)="onSubmit()" novalidate #form="ngForm">
      <div class="form-group">
        <label>E-Mail</label>
        <input type="email" class="form-control" #emailField="ngModel"
          [(ngModel)]="email" name="email" required pattern=".+@.+">
        <p *ngIf="emailField.touched && emailField.invalid" 
            class="alert alert-danger">Please enter a valid email</p>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" #passwordField="ngModel"
          [(ngModel)]="password" name="password" required >
        <p *ngIf="passwordField.touched && passwordField.invalid" 
            class="alert alert-danger">Please enter a password</p>
      </div>
      <button type="submit" class="btn btn-primary"
        [disabled]="form.invalid"
        >Sign Up</button>
    </form>
  `,
  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
export class SignupFormComponent {

  email = '';
  password = '';

  onSubmit() {
    console.log('should submit:', this.email);
  }

}
