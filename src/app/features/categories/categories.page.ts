import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonCheckbox } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton,
    CommonModule,
    FormsModule, IonList, IonLabel, IonCheckbox]
})
export class CategoriesPage implements OnInit {

  categories: Category[] = [];
  newCategory = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    console.log("ng Oninit category");
    this.loadCategories();
  }

  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  addCategory(){
    console.log("add category");
    if (!this.newCategory) return;

    const category: Category = {
      id: uuid(),
      name: this.newCategory
    };

    this.categoryService.addCategory(category);

    this.newCategory = '';
    this.loadCategories();  
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id);
    this.loadCategories();
  }

  editCategory(category: Category) {

    const newName = prompt('Editar categoría', category.name);

    if (!newName) return;

    category.name = newName;

    this.categoryService.updateCategory(category);

    this.loadCategories();
  }

}
