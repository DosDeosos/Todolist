import { Injectable } from '@angular/core';
import { BasketStorageService } from './basket-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  selectedMovies: any[] = [];

  constructor(private basketStorageService: BasketStorageService) {}

  addToBasket(movie: any) {
    this.selectedMovies.push(movie);
    this.basketStorageService.setBasketData(this.selectedMovies);
  }

  removeFromBasket(movie: any) {
    const index = this.selectedMovies.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      this.selectedMovies.splice(index, 1);
    }
    this.basketStorageService.setBasketData(this.selectedMovies);
  }

  clearBasket() {
    this.selectedMovies = [];
    this.basketStorageService.setBasketData(this.selectedMovies);
  }
}
