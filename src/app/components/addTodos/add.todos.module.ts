import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddTodosRoutingModule } from "./add.todos-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";

import AddTodosComponent from "./add.todos.component";

@NgModule({
  imports: [
    AddTodosRoutingModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [AddTodosComponent],
})
export class AddTodosModule {}
