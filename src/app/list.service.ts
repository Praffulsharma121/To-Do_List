import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  toDo: string[] = [];
  doing: string[] = [];
  done: string[] = [];

  constructor() { }

  addTodo(task: string){
    this.toDo.push(task);
  }

  addDoing(task: string){
    this.doing.push(task);
  }

  addDone(task: string){
    this.done.push(task);
  }

  removeFromTodo(task: number){
    this.toDo.splice(task, 1);
  }

  removeFromDoing(task: number){
    this.doing.splice(task, 1);
  }

  todoPercentage(): number{
    const total = this.toDo.length + this.doing.length + this.done.length;
    const per = (this.toDo.length / total) * 100;
    return per;
  }

  doingPercentage(): number{
    const total = this.toDo.length + this.doing.length + this.done.length;
    const per = (this.doing.length / total) * 100;
    return per;
  }

  donePercentage(): number{
    const total = this.toDo.length + this.doing.length + this.done.length;
    const per = (this.done.length / total) * 100;
    return per;
  }

}
