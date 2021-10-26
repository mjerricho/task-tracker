import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
// to find out what we're doing (couter)

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) { // theses are providers
    
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  } // catch from this.subject.next

  ngOnInit(): void {}

  toggleAddTask() { //when btnclick is executed, this is called
     this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return (this.router.url == route); // boolean value
  }

}
