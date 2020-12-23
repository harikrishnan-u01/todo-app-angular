import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as Highcharts from "highcharts";

@Component({
  selector: "charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.less"],
})
export default class ChartsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: "line",
      },
    ],
  };

  constructor(private router: Router) {}

  cancelAddTodo() {
    this.router.navigate(["showTodos"]);
  }
}
