import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
  {
    path: "charts",
    loadChildren: () => {
      return import("./components/charts/charts.module").then(
        (m) => m.ChartsModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
