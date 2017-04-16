import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AppServer } from '../../app.server.service';
import { Task } from '../../task';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  private title = '';
  private _task: Task;
  constructor(private appServer: AppServer, private router:Router) { }
  addTask() {
    if (this.title !== '') {
      this._task = {
        id: 0,
        title: this.title,
        status: 'pending'
      }
      this.appServer.addTask(this._task)
      .subscribe((t: Task) => {
        this.router.navigate(['/list']);
      })
      this.title = '';
    }
  }
}
