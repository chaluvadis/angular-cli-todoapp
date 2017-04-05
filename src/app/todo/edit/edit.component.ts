import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from '../../app.service';
import { Task } from '../../task';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
  private task: Task;
  constructor(private appService: AppService, private route: ActivatedRoute, private router:Router) { }
  ngOnInit() {
    this.task = this.appService.getTaskById(Number(this.route.snapshot.params.id));
  }
  saveChanges(task:Task){
    console.log(task);
    let filterTask = this.appService.getTaskById(task.id);
    filterTask.title = task.title;
    filterTask.status = task.status;
    this.router.navigate(['/list']);
  }
}
