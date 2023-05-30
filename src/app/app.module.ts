import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ActorsComponent } from './actors/actors.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { TrailerComponent } from './trailer/trailer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    ActorsComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    DetailsComponent,
    TrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
