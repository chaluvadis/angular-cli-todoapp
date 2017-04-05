import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Task } from '../../task';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() tasks: Task[] = [];
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.tasks = this.appService.getAllTasks();
  }
}
