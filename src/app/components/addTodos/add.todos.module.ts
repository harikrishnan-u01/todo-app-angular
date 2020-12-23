import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddTodosRoutingModule } from "./add.todos-routing.module";
import AddTodosComponent from "./add.todos.component";

@NgModule({
  imports: [AddTodosRoutingModule, CommonModule],
  declarations: [AddTodosComponent],
})
export class AddTodosModule {}
