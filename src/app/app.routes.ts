import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { EditComponent } from './todo/edit/edit.component';
import { ListComponent } from './todo/list/list.component';

const App_Routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'edit/:id', component: EditComponent }
];

export const routes = RouterModule.forRoot(App_Routes);