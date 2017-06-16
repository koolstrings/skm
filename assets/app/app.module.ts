import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AuthComponent } from "./user/auth.component";
import { skmComponentHeader } from "./header/header.component";
import { skmAboutComponent } from "./base/info/about/about.component";
import { skmFooterComponent } from "./footer/footer.component";
import { skmBaseComponent } from "./base/base.component";
import { skmMenuComponent } from "./base/menu/menu.component";
import { skmCarouselComponent } from "./base/carousel/carousel.component";
import { skmAdBlockComponent } from "./base/adBlock/adblock.component";
import { skmNewsComponent } from "./base/news/news.component"

@NgModule({
    declarations: [
        AppComponent, AuthComponent, skmComponentHeader, skmAboutComponent, skmFooterComponent, skmBaseComponent, skmMenuComponent, skmCarouselComponent, skmAdBlockComponent, skmNewsComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}