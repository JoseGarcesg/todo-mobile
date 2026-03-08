import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private KEY = 'categories';

  getCategories(): Category[] {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : [];
  }

  saveCategories(categories: Category[]) {
    localStorage.setItem(this.KEY, JSON.stringify(categories));
  }

  addCategory(category: Category) {
    const categories = this.getCategories();
    categories.push(category);
    this.saveCategories(categories);
  }

  deleteCategory(id: string) {
    const categories = this.getCategories().filter(c => c.id !== id);
    this.saveCategories(categories);
  }

  updateCategory(category: Category) {
    const categories = this.getCategories().map(c =>
      c.id === category.id ? category : c
    );
    this.saveCategories(categories);
  }
}