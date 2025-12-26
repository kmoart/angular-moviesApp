import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewMoviePageComponent } from './pages/new-movie-page/new-movie-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      { path: 'new-movie', component: NewMoviePageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: NewMoviePageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: MoviePageComponent },
      { path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
