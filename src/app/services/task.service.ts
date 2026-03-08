import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private KEY = 'tasks';

  constructor(private storage: StorageService) {}

  getTasks(): Task[] {
    return this.storage.get(this.KEY);
  }

  addTask(task: Task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.storage.set(this.KEY, tasks);
  }

  deleteTask(id: string) {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.storage.set(this.KEY, tasks);
  }

  toggleTask(id: string) {
    const tasks = this.getTasks();

    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;

    this.storage.set(this.KEY, tasks);
  }

}