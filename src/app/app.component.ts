import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
