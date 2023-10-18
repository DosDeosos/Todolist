import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterMoviesPipe } from './movie/filter-movies.pipe';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket.service';
import { BasketStorageService } from './basket-storage.service';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MovieComponent,
    FilterMoviesPipe,
    BasketComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [BasketService, BasketStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
