import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppServer } from '../../app.server.service';
import { Task } from '../../task';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  private title = '';
  private _task: Task;
  constructor(private appServer: AppServer) { }
  addTask() {
    if (this.title !== '') {
      this._task = {
        id: 0,
        title: this.title,
        status: 'pending'
      }
      const locals = this.appServer.addTask(this._task);
      locals.subscribe((t: Task) => this._task = t)
      this.title = '';
    }
  }
}
