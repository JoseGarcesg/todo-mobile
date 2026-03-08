import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput,
  IonButton, IonList, IonLabel, IonCheckbox, IonSelectOption, IonSelect
} from '@ionic/angular/standalone';
import { TaskService } from 'src/app/services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Category } from 'src/app/models/category.model';
import { Task } from 'src/app/models/task.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton,
    CommonModule,
    FormsModule, IonList, IonLabel, IonCheckbox, IonSelectOption, IonSelect]
})
export class TasksPage implements OnInit {

  tasks: Task[] = [];
  newTask = '';

  categories: Category[] = [];
  selectedCategory = '';

  filterCategory = '';
  filteredTasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadTasks();
    this.loadCategories();
  }

  loadTasks() {
    //console.log('load task');
    this.tasks = this.taskService.getTasks();
    //console.log(this.tasks);
    this.applyFilter();

  }

  loadCategories() {
    //console.log('load category');
    this.categories = this.categoryService.getCategories();
    //console.log(this.categories);
  }



  addTask() {
    if (!this.newTask) return;

    this.taskService.addTask({
      id: uuid(),
      title: this.newTask,
      completed: false,
      categoryId: this.selectedCategory
    });

    this.newTask = '';
    this.loadTasks();
  }

  toggleTask(id: string) {
    this.taskService.toggleTask(id);
    this.loadTasks();
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  getCategoryName(categoryId?: string) {
    if (!categoryId) return 'Sin categoría';
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Sin categoría';
  }

  /* getFilteredTasks() {
    if (!this.filterCategory) {
      return this.tasks;
    }

    if (this.filterCategory === 'none') {
      return this.tasks.filter(task => !task.categoryId);
    }

    return this.tasks.filter(task => task.categoryId === this.filterCategory);
  } */

  applyFilter() {

    if (!this.filterCategory) {
      this.filteredTasks = this.tasks;
      return;
    }

    if (this.filterCategory === 'none') {
      this.filteredTasks = this.tasks.filter(t => !t.categoryId);
      return;
    }

    this.filteredTasks = this.tasks.filter(
      t => t.categoryId === this.filterCategory
    );

  }

}
