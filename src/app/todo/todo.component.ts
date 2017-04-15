import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AppServer} from '../app.server.service';
import { AppService } from '../app.service';
import { Task } from '../task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() task: Task;
  constructor(private appServer: AppServer, private _routeParms: ActivatedRoute) { }
  removeTask = (task: Task): void => { 
    const local = this.appServer.deleteTask(task.id); 
    local.subscribe();
  }
}
