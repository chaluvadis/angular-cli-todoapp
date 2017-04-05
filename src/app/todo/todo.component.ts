import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../app.service';

import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() task:Task;
  constructor(private appService: AppService) { }
  removeTask(task:Task) {
    console.log(task);
    this.appService.removeTask(task);
  }
  editTaskStatus(task:Task) {
    console.log(task);
    this.appService.editTaskStatus(task);
  }
}
