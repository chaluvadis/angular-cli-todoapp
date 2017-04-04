import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { EditComponent } from './todo/edit/edit.component';

const App_Routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: AppComponent },
    { path: 'edit', component: EditComponent }
];

//export const routing = RouterModule.forRoot(App_Routes);