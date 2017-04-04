import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() status: string;
}
