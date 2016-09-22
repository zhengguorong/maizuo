import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {routing} from "./app.routing";
import {IndexView} from "./containers/index.view";
import {CardView} from "./containers/card/card.view";
import {NavBarComponent} from "./components/common/navbar.component";
import {SideBarComponent} from "./components/common/sidebar.component";
import {KSSwiperModule} from "angular2-swiper";
import {BillboardCarouselComponent} from "./components/home/billboardcarousel.component";
import {NowPlayingFilmsComponent} from "./components/home/nowplayingfilms.component";
import {ComingSoonFilmsComponent} from "./components/home/comingsoonfilms.component";
import {MoreButtonComponent} from "./components/home/morebutton.component";

@NgModule({
  imports: [ BrowserModule,routing,KSSwiperModule ],
  declarations: [
    AppComponent,
    IndexView,
    CardView,
    NavBarComponent,
    SideBarComponent,
    BillboardCarouselComponent,
    NowPlayingFilmsComponent,
    ComingSoonFilmsComponent,
    MoreButtonComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
