// module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // added automatically because we use cli module!
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// bring in routher module, set up route.
import { Router, RouterModule, Routes } from '@angular/router';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
  // home -> just the tasks 
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [ // for components
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [ // for module
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}) 
    // enable tracing helps debug rout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
