import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../interface/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  category: any={
    name:'',
    description:''
  };
  public categories: any =[];
  editingIndex: number | null = null;
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.service.getAll().subscribe(datos => {this.categories = datos;
      console.log(this.categories)});
  }

  update(): void {
    if (this.editingIndex != null && this.category.name && this.category.description) {
      console.log(this.category)
      console.log(this.category.id)
      
      this.service.update(this.editingIndex, this.category).subscribe(() => {
        this.category.name = '';
        this.category.description = '';
        this.loadCategories();
      }, err => console.error('Error updating category:', err));
    }
  }

  onSubmit(): void {
    if (this.editingIndex != null) {
      this.update();
    } else if (this.category.name && this.category.description) {
      this.service.created(this.category).subscribe(() => {
        this.category.name = '';
        this.category.description = '';
        this.editingIndex = null
        this.loadCategories();
      }, err => console.error('Error creating category:', err));
    }
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(res=>{
      this.service.getAll().subscribe(datos=>this.categories = datos);
    }, err=>console.log(err));
  }

  edit(index: number): void {
    this.editingIndex = index;
    this.category = { ...this.categories[index] };
  }
  resetForm(): void {
    this.category = { name: '', description: '' };
    this.editingIndex = null;
  }
}
