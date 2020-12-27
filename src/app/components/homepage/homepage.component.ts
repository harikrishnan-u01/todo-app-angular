import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ListTodoService, TodoResponse } from "../../list.todo.service";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.less"],
})
export default class HomepageComponent implements OnInit, OnDestroy {
  todos: TodoResponse[];
  completedTodos: TodoResponse[];
  listTodosSubscription$: Subscription | undefined;

  constructor(private listTodoService: ListTodoService) {
    this.todos = [];
    this.completedTodos = [];
  }

  ngOnInit(): void {
    this.listTodosSubscription$ = this.listTodoService
      .getAllTodos()
      .subscribe((data: any) => {
        // console.log("data--->", data);
        const todo = data.filter((single: TodoResponse) => {
          return single.completed;
        });
        const completed = data.filter((single: TodoResponse) => {
          return !single.completed;
        });

        this.todos = todo;
        this.completedTodos = completed;
      });
  }

  ngOnDestroy(): void {
    this.listTodosSubscription$?.unsubscribe();
  }

  trackById(index: number, todo: TodoResponse): number {
    // console.log("Id==>", todo.id);
    return todo.id;
  }
}
