import { Injectable } from '@angular/core';
import { Task } from './task'
@Injectable()
export class AppService {
  private _tasks: Task[] = [
    { id: 1, title: 'task 1', status: 'pending' },
    { id: 2, title: 'task 2', status: 'pending' },
    { id: 3, title: 'task 3', status: 'pending' },
    { id: 4, title: 'task 4', status: 'pending' },
    { id: 5, title: 'task 5', status: 'pending' },
    { id: 6, title: 'task 6', status: 'pending' }
  ];
  constructor() { }
  addTask = (task: Task): void => { this._tasks.push({ id: this._tasks.length + 1, title: task.title, status: task.status }) }
  getAllTasks = (): Task[] => { return this._tasks; }
  removeTask = (task: Task): void => { this._tasks.splice(this._tasks.indexOf(task), 1); }
  getTaskById = (id: number): Task => { return this._tasks.find(x => x.id === id); }
}
