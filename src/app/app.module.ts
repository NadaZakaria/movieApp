import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { CurrentPlayComponent } from './current-play/current-play.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrentPlayDetailsComponent } from './current-play-details/current-play-details.component';
import { PoupularComponent } from './poupular/poupular.component';
import { PopularDetailsComponent } from './popular-details/popular-details.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TopRatedDetailsComponent } from './top-rated-details/top-rated-details.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComingSoonDetailsComponent } from './coming-soon-details/coming-soon-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentPlayComponent,
    CurrentPlayDetailsComponent,
    PoupularComponent,
    PopularDetailsComponent,
    TopRatedComponent,
    TopRatedDetailsComponent,
    ComingSoonComponent,
    ComingSoonDetailsComponent,
    MovieDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule,RouterModule,BrowserAnimationsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
