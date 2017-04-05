import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../app.service';

import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() status: string;

  constructor(private appService: AppService) { }

  removeTask(id:number, title:string, status:string) {
    console.log(id, title, status);
    this.appService.removeTask({
      id: id,
      title: title,
      status: status,
    });
  }

  editTaskStatus(id:number, title:string, status:string) {
    console.log(id, title, status);
    this.appService.editTaskStatus({
      id: id,
      title: title,
      status: status
    });
  }
}
