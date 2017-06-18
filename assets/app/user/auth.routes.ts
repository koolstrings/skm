import { Routes, RouterModule } from '@angular/router'
import { skmSignUpComponent } from "./signup.component";
import { skmLoginComponent } from "./login.component";
import { skmLogOutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    { path : '', redirectTo: 'signup', pathMatch:'full'},
    { path : 'login', component : skmLoginComponent },
    { path : 'logout', component : skmLogOutComponent },
    { path : 'signup', component : skmSignUpComponent},
    { path: '**', redirectTo: 'signup' }
];