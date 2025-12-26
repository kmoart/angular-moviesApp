import { Component, OnInit } from '@angular/core';
import { Movie, Search } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public movies: Search[] = [];

  constructor(private moviesServices: MoviesService){}

  ngOnInit(): void {
      this.moviesServices.getMovies()
        .subscribe( movies =>{
            this.movies = movies.Search;
            console.log('movies -->', this.movies);
        }  );
  }
}
