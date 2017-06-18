import { Routes, RouterModule } from '@angular/router'
import { skmAboutComponent } from "./base/info/about/about.component";
import { skmHomeComponent } from "./base/home.component";
import { AuthComponent } from "./user/auth.component";
import { AUTH_ROUTES } from "./user/auth.routes";
import { skmInProgressPage } from "./inprogress.component";

const APP_ROUTES: Routes = [
    { path : '', redirectTo: '/home', pathMatch:'full'},
    { path : 'home', component : skmHomeComponent},
    { path : 'about', component : skmAboutComponent },
    /*{ path : 'auth', component : AuthComponent, children: AUTH_ROUTES},    */
    { path : 'inProgress', component : skmInProgressPage },
    { path: '**', redirectTo: '/home' }
];

export const skmRouting = RouterModule.forRoot(APP_ROUTES);