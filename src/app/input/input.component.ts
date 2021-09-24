import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  task: string = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.listService.addTodo(this.task);
    this.task = '';
  }

}
