import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import HomepageComponent from './components/homepage/homepage.component';
import AddTodosComponent from './components/addTodos/add.todos.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'showTodos',
    component: HomepageComponent,
  },
  {
    path: 'addTodo',
    component: AddTodosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
