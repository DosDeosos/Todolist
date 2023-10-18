import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  input: string = '';
  list: Todo[] = JSON.parse(window.localStorage.getItem('todo') || '[]');
  addInput = document.getElementById('add-input') as HTMLInputElement | null;
  submit = () => {
    if (!this.input) return;
    this.list.push({ checked: false, value: this.input });
    this.input = '';
    if (this.addInput) {
      this.addInput.value = '';
    }
    this.setStorage();
  };
  setStorage = () => {
    window.localStorage.setItem('todo', JSON.stringify(this.list));
  };
  delete = (i: any) => {
    this.list.splice(i, 1);
    this.setStorage();
  };
}
