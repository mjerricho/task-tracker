import { Injectable } from '@angular/core';
// being in injectable, applied at application level
// to deal with api, include httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this must be added as module in app.module
import { Observable, of } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  // similar ot when we bering service to component, we need to include the httpclient too
  constructor(private http:HttpClient) { // to use get, post, stc

   }

  getTasks(): Observable<Task[]> {  // function returns type task
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task: Task): Observable<Task> { // delete from server
    const url = `${this.apiURL}/${task.id}`; // create the url
    console.log("deleteTask called")
    return this.http.delete<Task>(url); // return the delete request to the server
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`; // create the url
    return this.http.put<Task>(url, task, httpOptions);
    // put request to make an update, pass url, task
    // we pass in data -> pass in header and content type
    // we update the server!
  }

  // write post request for adding task
  addTask(task: Task): Observable<Task>{ 
    return this.http.post<Task>(this.apiURL, task, httpOptions)
  }
}
