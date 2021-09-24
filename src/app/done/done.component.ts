import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dones: string[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.dones = this.listService.done
  }

}
