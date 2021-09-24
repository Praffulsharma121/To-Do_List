import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  todoPer: number = 0;
  doingPer: number = 0;
  donePer: number = 0;
  count = 1;

  constructor(private listService: ListService) { 
  }

  ngOnInit(): void {
    setInterval(() => {
      this.todoPer = this.listService.todoPercentage();
      this.doingPer = this.listService.doingPercentage();
      this.donePer = this.listService.donePercentage();
    }, 5);
  }

  call(){
    console.log('Running');
  }

}
