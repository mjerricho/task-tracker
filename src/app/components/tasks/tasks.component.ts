import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // for the interface
import { TaskService } from 'src/app/services/task.service';
// to use the service, it must be added as a provider to the constructor

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; // let tasks be the mock data

  constructor(private taskService: TaskService) { // take in anything from getTasks() task.service

   }

  ngOnInit(): void { // void means it does not return anything
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks); // like a promise, do a .then
    // this tasks = the tasks we get from observable
  }

}
