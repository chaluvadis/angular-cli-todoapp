import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() tasks = []
  constructor(){
    this.tasks.push({
      id: 1,
      status: 'pending',
      title: 'test task'
    });
  }
}
