import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  selectedMovies: any[] = [];

  addToBasket(movie: any) {
    this.selectedMovies.push(movie);
  }

  removeFromBasket(movie: any) {
    const index = this.selectedMovies.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      this.selectedMovies.splice(index, 1);
    }
  }

  clearBasket() {
    this.selectedMovies = [];
  }
}
