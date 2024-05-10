import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { CategoryComponent } from '../../component/category/category.component';
import { ListCategory } from '../../interface/category';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AsyncPipe, CategoryComponent, RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){}
  onSubmitCategory() {
    this.router.navigate(['/category']);  
  }
  onSubmitExpenses() {
    this.router.navigate(['/expenses']);  
  }
}
