import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppService } from '../../app.service';

import { Task } from '../../task';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  private title = '';
  private _task: Task;
  constructor(private appService: AppService) { }
  addTask() {
    if (this.title !== '') {
      this._task = {
        id: 0,
        title: this.title,
        status: 'pending'
      }
      this.appService.addTask(this._task);
      this.title = '';
      console.log('add task fired');
    }
  }
}
