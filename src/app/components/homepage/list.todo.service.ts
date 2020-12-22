import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListTodoService {
  constructor(private httpClient: HttpClient) {}

  getAllTodos() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
