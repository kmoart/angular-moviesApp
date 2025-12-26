import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Movie } from '../interfaces/movie.interface';

@Injectable({providedIn: 'root'})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${ this.baseUrl }/movies`)
  }
}
