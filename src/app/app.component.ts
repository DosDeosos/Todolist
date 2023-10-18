import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  view = 'movie';
  title = 'Todolist';
  changeView = (view: string) => {
    this.view = view;
  };
}
