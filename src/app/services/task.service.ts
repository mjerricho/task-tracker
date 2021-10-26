import { Injectable } from '@angular/core';
// being in injectable, applied at application level
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {  // function returns type task
    const tasks = of(TASKS); // make task an observable
    // we subscribe to an observable -> constantly watch it
    return tasks;
  } // how to make this an observable
}
