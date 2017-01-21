import { Injectable } from '@angular/core'

@Injectable()
export class LoginService {

    loggedIn = false;

    constructor(){

    }

    login(username: string, password : string){
        console.log("trying to login", username, password);
        if ( username && password ){ // login when both are set
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
        return this.loggedIn;
    }

}