import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

//import { AppService } from '../../app.service';
import { AppServer } from '../../app.server.service'
import { Task } from '../../task';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() tasks: Task[] = [];
  constructor(private appServer: AppServer) { }
  ngOnInit() {
    this.appServer.getAllTasks().subscribe((t: Task[]) => this.tasks = t);
  }
}
