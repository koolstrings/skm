import { Routes, RouterModule } from '@angular/router'
import { skmAboutComponent } from "./base/info/about/about.component";
import { skmHomeComponent } from "./base/home.component"

const APP_ROUTES: Routes = [
    { path : '', redirectTo: '/home', pathMatch:'full'},
    { path : 'home', component : skmHomeComponent},
    { path : 'about', component : skmAboutComponent },
];

export const skmRouting = RouterModule.forRoot(APP_ROUTES);