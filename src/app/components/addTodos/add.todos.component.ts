import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppSharedService } from "../../app.shared.service";

@Component({
  selector: "add-todos",
  templateUrl: "./add.todos.component.html",
  styleUrls: ["./add.todos.component.less"],
})
export default class AddTodosComponent {
  checked: boolean = true;

  constructor(
    private router: Router,
    private appSharedService: AppSharedService
  ) {}

  cancelAddTodo() {
    this.router.navigate(["showTodos"]);
    this.appSharedService.setSelectedTab(1);
  }
}
