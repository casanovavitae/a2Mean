import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoObject } from './todo.object';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: TodoObject[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
      .subscribe(response => {
        this.todos = response;
      });
  }

  addTodo(event,todoInput){
    var result:any;
    var _newTodo = {
      _id: todoInput._id,
      text: todoInput.value,
      isCompleted: false
    }

    result = this._todoService.addTodo(_newTodo);
    result.subscribe(response => {
      this.todos.push(_newTodo);
      todoInput.value= '';
    })
  }

  setEditState(todo,state){
    if(state){
      todo.isEditMode = state;
    }else{
      delete todo.isEditMode;
    }
  }

  updateStatus(todo){
    var result:any;
    var _todo = {
      _id : todo._id,
      text: todo.text,
      isCompleted : !todo.isCompleted
    }

    this._todoService.updateTodo(_todo).subscribe(response => {
      todo.isCompleted = !todo.isCompleted;
    })
  }

  updateTodoText(event,todo){

      todo.text = event.target.value;

      var _todo ={
        _id: todo._id,
        text: todo.text,
        isCompleted: todo.isCompleted
      }

      this._todoService.updateTodo(_todo)
      .subscribe(response => {
        this.setEditState(todo,false);
      })

  }

  deleteTodo(todo){

    var todos = this.todos;

    this._todoService.deleteTodo(todo._id)
    .subscribe(response =>{
      if(response.n == 1){
        for(var i = 0; i < todos.length; i++){
          if(todos[i]._id == todo._id){
            todos.splice(i,1);
          }
        }
      }
    })

  }

}
