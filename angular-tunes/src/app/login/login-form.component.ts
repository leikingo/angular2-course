import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
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

    constructor(private route: ActivatedRoute,
                private loginService: LoginService,
                private router: Router){

    }

    login(){
        // here we are only interested in the current value and not to url changes
        // thus we can take the snapshot here
        const destination = this.route.snapshot.queryParams['destination'] || '/'; 
        if (this.loginService.login(this.user, this.password)){
            this.router.navigateByUrl(destination);
        }
    }

}