import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from './login.service'


@Component({
    template: `
        <h1>Login</h1>
        <div>
            <input type="text" [(ngModel)]="user" placeholder="Username">
            <input type="text" [(ngModel)]="password" placeholder="Password">
            <button class="btn btn-primary" (click)="login()">Login</button>
        </div>
    `
})
export class LoginFormComponent {
    

    user: '';
    password: '';

    constructor(private loginService: LoginService,
        private router: Router){

    }

    login(){
        if (this.loginService.login(this.user, this.password)){
            this.router.navigate(['/']);
        }
    }

}