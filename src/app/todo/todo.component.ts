import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class AppComponent {
  // Store the value of the input
  todoItem: string = "";

  // Store the list of todo items
  todoList: string[] = [];

  // on button click
  addToTodoList = () => {
      // Pushing todo itm to the list
      this.todoList.push(this.todoItem);

      // Clear the value of todoItem
      this.todoItem = '';
  }
}