import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddComponent } from './todo/add/add.component';
import { TodoComponent } from './todo/todo.component';
import { EditComponent } from './todo/edit/edit.component';
import { ListComponent } from './todo/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EditComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
