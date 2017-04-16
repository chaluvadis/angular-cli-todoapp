import { Observable } from "rxjs/Observable";
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServer } from '../app.server.service';
import { AppService } from '../app.service';
import { Task } from '../task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() task: Task;
  constructor(private appServer: AppServer, private router: Router) { }
  removeTask = (task: Task) => {
    this.appServer.deleteTask(task.id).subscribe((status: boolean) => {
      if (status) {
        this.router.navigate(['/list']);
      }
    });
  }
}
