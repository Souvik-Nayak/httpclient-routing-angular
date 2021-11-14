import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  todoDetails = [
    {"id":1, "task":"Create a YouTube video", "status":"Not Done"},
    {"id":2, "task":"Go to Gym", "status":"Done"},
    {"id":3, "task":"Buy Groceries", "status":"Done"},
    {"id":4, "task":"Review Web Blog", "status":"Not Done"},
    {"id":5, "task":"Finish Assignment", "status":"Done"},
  ]

  getTodo() {
    return this.todoDetails;
  }

  constructor() { }
}