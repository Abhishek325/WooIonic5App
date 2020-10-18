import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router) { }

    canActivate(): Promise<boolean> {
        return this.auth.isAuthenticated().then(data => {
            if (!data) {
                this.router.navigate(['home','login']);
                return false;
            }
            return true;
        });
    }
}
