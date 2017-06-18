import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from "./app.component";
import { AuthComponent } from "./user/auth.component";
import { skmComponentHeader } from "./header/header.component";
import { skmAboutComponent } from "./base/info/about/about.component";
import { skmFooterComponent } from "./footer/footer.component";
import { skmHomeComponent } from "./base/home.component";
import { skmMenuComponent } from "./base/menu/menu.component";
import { skmCarouselComponent } from "./base/carousel/carousel.component";
import { skmAdBlockComponent } from "./base/adBlock/adblock.component";
import { skmNewsComponent } from "./base/news/news.component"
import { skmRouting } from "./app.routing"

import { skmLoginComponent } from "./user/login.component";
import { skmLogOutComponent } from "./user/logout.component";
import { skmSignUpComponent } from "./user/signup.component";

import { skmInProgressPage } from "./inprogress.component";

@NgModule({
    declarations: [
        AppComponent, AuthComponent, skmComponentHeader, skmAboutComponent, 
        skmFooterComponent, skmHomeComponent, skmMenuComponent, skmCarouselComponent, 
        skmAdBlockComponent, skmNewsComponent, skmLogOutComponent, skmLoginComponent,
        skmSignUpComponent, skmInProgressPage
    ],
    imports: [BrowserModule, FormsModule, skmRouting],
    bootstrap: [AppComponent]
})
export class AppModule {

}