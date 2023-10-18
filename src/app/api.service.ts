import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://api.themoviedb.org/3';
  apiKey = '61b4cf9e54c468bd92de34a59c8caa69';

  constructor(private http: HttpClient) {}

  searchMovies(query: string) {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;

    return this.http.get(url);
  }
}
