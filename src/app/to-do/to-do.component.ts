import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: string[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.todos = this.listService.toDo;
  }

  toDoing(task: string, index: number){
    this.listService.addDoing(task);
    this.listService.removeFromTodo(index);
  }

  onDelete(task: number){
    this.listService.removeFromTodo(task);
  }

}
