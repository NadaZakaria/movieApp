import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentPlayComponent } from './current-play/current-play.component';
import { CurrentPlayDetailsComponent } from './current-play-details/current-play-details.component';
import { PopularDetailsComponent } from './popular-details/popular-details.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TopRatedDetailsComponent } from './top-rated-details/top-rated-details.component';
import { ComingSoonDetailsComponent } from './coming-soon-details/coming-soon-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"currentPageDetails", component:CurrentPlayDetailsComponent},
  {path:"popularDetails", component:PopularDetailsComponent},
  {path:"topRatedDetails", component:TopRatedDetailsComponent},
  {path:"comingSoonDetails", component:ComingSoonDetailsComponent},
  {path:"movieDetails/:id", component:MovieDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
