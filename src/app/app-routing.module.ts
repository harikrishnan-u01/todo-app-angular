import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddTodosComponent } from "./components/addTodos";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => {
      return import("./components/homepage/homepage.module").then(
        (m) => m.HomepageModule
      );
    },
  },
  {
    path: "showTodos",
    loadChildren: () => {
      return import("./components/homepage/homepage.module").then(
        (m) => m.HomepageModule
      );
    },
  },
  {
    path: "addTodo",
    loadChildren: () => {
      return import("./components/addTodos/add.todos.module").then(
        (m) => m.AddTodosModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
