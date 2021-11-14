import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'list', component:TodoListComponent},
  {path:'details', component:TodoDetailsComponent},
  {path:'spacex', component:SpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }