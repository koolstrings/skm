import { Component } from '@angular/core';

@Component({
    selector: 'auth-comp',
    template: `
                <header class="row spacing">
                    <div class="container">  
                        <nav class="col-md-8 col-offset-2 ">
                            <ul class="nav nav-tabs">
                                <li routerLinkActive="active"><a [routerLink]="['signup']">Sign Up</a></li>
                                <li routerLinkActive="active"><a [routerLink]="['login']">Log In</a></li>
                                <li routerLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div class="container">                    
                    <router-outlet></router-outlet>
                </div>
            `
})
 
export class AuthComponent {
    
}