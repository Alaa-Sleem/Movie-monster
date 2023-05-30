import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ActorsComponent } from './actors/actors.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { TrailerComponent } from './trailer/trailer.component';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'movies/:pag',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tvshow/:pag',canActivate:[AuthGuard],component:TvshowsComponent},
  {path:'actors',canActivate:[AuthGuard],component:ActorsComponent},
  {path:'details/:id/:mediaType',canActivate:[AuthGuard],component:DetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'trailer/:page',canActivate:[AuthGuard],component:TrailerComponent},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
