import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void { // call this when we click it
    this.showAddTask = !this.showAddTask; // update the showAddTask
    this.subject.next(this.showAddTask); //pass in value of the boolean 
  }

  onToggle(): Observable<any> { // when that happen, we subcribe t onToggle
    return this.subject.asObservable();
  }
}
