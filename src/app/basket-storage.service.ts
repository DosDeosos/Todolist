import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketStorageService {
  private storageKey = 'basketData';

  getBasketData(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  setBasketData(data: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
