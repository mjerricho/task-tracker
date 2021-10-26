import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Task } from 'src/app/Task'; // get the interface
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
// we can isntall a module from the fontawesome

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task; // set to receive input task which has type Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) { // catch cross button, then emit event
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) { // 
    this.onToggleReminder.emit(task);
  }

}
