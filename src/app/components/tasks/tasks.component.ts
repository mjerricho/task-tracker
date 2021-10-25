import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // for the interface
import { TASKS } from '../../mock-tasks'; // for the mock ddata

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS; // let tasks be the mock data

  constructor() { }

  ngOnInit(): void {
  }

}
