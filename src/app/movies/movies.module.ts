import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewMoviePageComponent } from './pages/new-movie-page/new-movie-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    MoviePageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewMoviePageComponent,
    SearchPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
