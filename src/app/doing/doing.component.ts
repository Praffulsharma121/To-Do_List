import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  doings: string[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.doings = this.listService.doing;
  }

  toDone(task: string, index: number){
    this.listService.addDone(task);
    this.listService.removeFromDoing(index);
  }

  onDelete(task: number){
    this.listService.removeFromDoing(task);
  }

}
