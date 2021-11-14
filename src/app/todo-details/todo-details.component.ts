import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent implements OnInit {
  todo : any = []

  constructor(private td:TodoServiceService) { }

  ngOnInit(): void {
    this.todo = this.td.getTodo();
  }
}