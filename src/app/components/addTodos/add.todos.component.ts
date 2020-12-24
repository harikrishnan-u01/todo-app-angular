import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "add-todos",
  templateUrl: "./add.todos.component.html",
  styleUrls: ["./add.todos.component.less"],
})
export default class AddTodosComponent {
  checked: boolean = true;

  constructor(private router: Router) {}

  cancelAddTodo() {
    this.router.navigate(["showTodos"]);
  }
}
