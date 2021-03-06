import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-form',
  template: `
    <form (ngSubmit)="onSubmit(form)" novalidate #form="ngForm">
      <div class="form-group">
        <label>E-Mail</label>
        <input type="text" class="form-control" #emailField='myModel'
          [(myModel)]="email" required>
          <p *ngIf="emailField.invalid" 
            class="alert alert-danger">Please enter a valid email</p>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" #passwordField="ngModel"
          [(ngModel)]="password" name="password" required >
        <p *ngIf="passwordField.touched && passwordField.invalid" 
            class="alert alert-danger">Please enter a password</p>
      </div>
      <pre>E-Mail: {{email}}</pre>
      <button type="submit" class="btn btn-primary"
        [disabled]="form.invalid"
        >Sign Up</button>
      <button type="button" class="btn btn-warning"  
        (click)="email=''"
        >Reset</button>
    </form>
  `,
  styles: [`
    input.my-invalid { border: solid red 2px; }
    input.my-valid { border: solid green 2px; }
  `]
})
export class SignupFormComponent {

  email = '';
  password = '';

  onSubmit(form: NgForm) {
    console.log('should submit:', this.email);
    form.resetForm();
  }

}
