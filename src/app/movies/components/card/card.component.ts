import { Component, Input } from '@angular/core';
import { Movie, Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-movie-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  public movie! : Search;

  ngOnInit():void{
    if ( !this.movie ) throw Error('Movie property is required');
  }
}
