import { Component, OnInit } from "@angular/core";
import { ListTodoService, TodoResponse } from "./list.todo.service";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  providers: [ListTodoService],
  styleUrls: ["./homepage.component.less"],
})
export default class HomepageComponent implements OnInit {
  todos: TodoResponse[];
  constructor(private listTodoService: ListTodoService) {
    this.todos = [];
  }
  ngOnInit() {
    this.listTodoService.getAllTodos().subscribe((data: any) => {
      console.log("data--->", data);
      this.todos = data;
    });
  }

  trackById(index: number, todo: TodoResponse) {
    console.log("Id==>", todo.id);
    return todo.id;
  }
}
