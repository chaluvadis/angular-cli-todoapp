import { Component, OnInit } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  headerTitle:string;
  tasks:Task[] = [];
  ngOnInit() {
    this.headerTitle = "My Todo App";
  }
}