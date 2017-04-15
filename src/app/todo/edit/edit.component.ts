import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BacktolistComponent } from '../backtolist/backtolist.component';
//import { AppService } from '../../app.service';
import { AppServer } from '../../app.server.service';
import { Task } from '../../task';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
  private task: Task;
  constructor(private appServer: AppServer, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    const locals = this.appServer.getTaskById(Number(this.route.snapshot.params.id));
    locals.subscribe(
      (t: Task) => this.task = t
    );
  }
  saveChanges(task: Task) {
    //let filterTask = this.appServer.getTaskById(task.id);
    // filterTask.title = task.title;
    // filterTask.status = task.status;
    const locals = this.appServer.updateTask(task);
    locals.subscribe(
      (t: Task) => this.task = t
    );
    this.router.navigate(['/list']);
  }
}
