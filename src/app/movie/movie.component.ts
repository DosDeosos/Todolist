import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: any[] = [];
  searchMovie: string = '';
  private searchQuery$ = new Subject<string>();
  selectedMovies: any[] = [];

  constructor(
    private apiService: ApiService,
    private basketService: BasketService
  ) {}

  ngOnInit() {
    this.searchQuery$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => this.apiService.searchMovies(query))
      )
      .subscribe((data: any) => {
        const storedMovies = localStorage.getItem('moviePrices');
        this.movies = data.results.map((movie: any) => {
          const storedMovie = storedMovies
            ? JSON.parse(storedMovies).find(
                (storeMovie: any) => storeMovie.id === movie.id
              )
            : null;

          movie.price = storedMovie ? storedMovie.price : 0;
          movie.editedPrice = movie.price;
          movie.quantity = 1;
          return movie;
        });
      });

    this.searchQuery$.next('a');
  }

  confirmMoviePrice(movie: any) {
    movie.price = movie.editedPrice;
    this.updateLocalStorage();
  }

  increaseQuantity(movie: any) {
    movie.quantity++;
  }

  decreaseQuantity(movie: any) {
    if (movie.quantity > 1) {
      movie.quantity--;
    }
  }

  addToBasket(movie: any) {
    this.basketService.addToBasket(movie);
  }

  updateLocalStorage() {
    const updatedMovies = this.movies.map((m) => ({
      id: m.id,
      price: m.price,
    }));
    localStorage.setItem('moviePrices', JSON.stringify(updatedMovies));
  }

  updateSearchQuery(query: string) {
    this.searchQuery$.next(query);
  }
}
