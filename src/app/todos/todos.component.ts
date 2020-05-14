import { slide } from './../animations';
import { Component, OnInit } from '@angular/core';

import { fade } from '../animations';
// transition('void<=>*', [animate(500)]),
// OR
// transition('void=>*, *=> void', [animate(500)]),
// OR
// transition(':enter, :leave', [animate(500)]),
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [slide],
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance',
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
