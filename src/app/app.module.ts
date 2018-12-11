import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/movies/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchProtocolComponent } from './components/search-protocol/search-protocol.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    ListComponent,
    FooterComponent,
    SearchProtocolComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
