import { Injectable } from '@angular/core';
// being in injectable, applied at application level
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {  // fundtion returns type task
    return TASKS;
  }
}
