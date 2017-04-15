import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { AppConfig } from './app.config';
import { Task } from './task'
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class AppServer {
    constructor(private http: Http, private appConfig: AppConfig) { }
    getAllTasks(): Observable<Task[]> {
        return this.http.get(this.appConfig.appUrl)
            .map(res => res.json());
    }
    addTask(task: Task): Observable<Task> {
        return this.http.post(this.appConfig.appUrl, task, this.appConfig.options)
            .map(res => res.json());
    }
    getTaskById(id: number): Observable<Task> {
        return this.http.get(this.appConfig.appUrl + "/" + id)
            .map(res => res.json());
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete(this.appConfig.appUrl + "/" + id, this.appConfig.options)
            .map(res => res.json());
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put(this.appConfig.appUrl, task, this.appConfig.options)
            .map(res => res.json());
    }
}
