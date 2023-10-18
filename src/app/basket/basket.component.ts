import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketStorageService } from '../basket-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  showModal = false;

  constructor(
    private basketService: BasketService,
    private basketStorageService: BasketStorageService
  ) {}

  ngOnInit() {
    const storedMovies = this.basketStorageService.getBasketData();
    if (storedMovies && storedMovies.length > 0) {
      this.basketService.selectedMovies = storedMovies;
    }
  }

  get selectedMovies() {
    return this.basketService.selectedMovies;
  }

  addToBasket(movie: any) {
    this.basketService.addToBasket(movie);
    this.basketStorageService.setBasketData(this.selectedMovies);
  }

  removeFromBasket(movie: any) {
    this.basketService.removeFromBasket(movie);
    this.basketStorageService.setBasketData(this.selectedMovies);
  }

  clearBasket() {
    this.basketService.clearBasket();
    this.basketStorageService.setBasketData([]);
  }

  calculateTotalAmount() {
    return this.selectedMovies.reduce(
      (total, movie) => total + movie.price * movie.quantity,
      0
    );
  }
}
