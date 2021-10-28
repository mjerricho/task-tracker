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
    this.taskService
      .getTasks()
      .subscribe((tasks) => this.tasks = tasks); // like a promise, do a .then
      // this tasks = the tasks we get from observable
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task) // call the task service
      .subscribe( // then filter from UI
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))); 
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService 
      .updateTaskReminder(task) // update the server
      .subscribe();
  }

  // update the server to include the new task
  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task) => (this.tasks.push(task)));
  }
}

