import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonCheckbox } from '@ionic/angular/standalone';
import { TaskService } from 'src/app/services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton,
    CommonModule,
    FormsModule, IonList, IonLabel, IonCheckbox]
})
export class TasksPage implements OnInit{

  tasks:any[] = [];
  newTask='';

  constructor(private taskService:TaskService) {}

   ngOnInit(){
    this.loadTasks();
  }

  loadTasks(){
    console.log('load task');
    
    this.tasks = this.taskService.getTasks();
  }



  addTask(){
    if(!this.newTask) return;

    this.taskService.addTask({
      id:uuid(),
      title:this.newTask,
      completed:false
    });

    this.newTask='';
    this.loadTasks();
  }

}
