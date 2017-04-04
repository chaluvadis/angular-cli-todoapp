import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  title = '';
  tasks = []
  constructor() {
    this.tasks.push({
      id: 1,
      status: 'pending',
      title: 'test task'
    })
  }
  addTask() {
    if (this.title !== '') {
      this.tasks.push({
        id: this.tasks.length + 1,
        status: 'pending',
        title: this.title
      });
      this.title = '';
      console.table(this.tasks);
    }
  }
}
