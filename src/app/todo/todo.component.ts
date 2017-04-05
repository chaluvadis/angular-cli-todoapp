import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() task: Task;
  constructor(private appService: AppService, private _routeParms:ActivatedRoute) { }
  removeTask(task: Task) {
    console.log(task);
    this.appService.removeTask(task);
  }
  editTaskStatus(task: Task) {
    // console.log(task);
    // this.appService.editTaskStatus(task);
  }
}
