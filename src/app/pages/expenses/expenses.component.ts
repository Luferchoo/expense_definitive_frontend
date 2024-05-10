import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpensesService } from '../../service/expenses.service';
import { Expense } from '../../interface/expense';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expenses.component.html',  
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expense: any = {
    name: '',
    description: '',
    amount: 0,
    timestamp: new Date()
  };
  expenses: any[] = [];
  editingIndex: number | null = null;

  constructor(private service: ExpensesService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAll().subscribe(datos => {this.expenses = datos;
      console.log(this.expenses)});
  }

  update(): void {
    if (this.editingIndex !== null && this.expense.name && this.expense.description) {
      this.service.update(this.expenses[this.editingIndex].id, this.expense).subscribe(() => {
        this.resetForm();
        this.load();
      }, err => console.error(err));
    }
  }

  onSubmit(): void {
    if (this.editingIndex !== null) {
      this.update();
    } else if (this.expense.name && this.expense.description) {
      this.service.created(this.expense).subscribe(() => {
        this.resetForm();
        this.load();
      }, err => console.error(err));
    }
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.load();
    }, err => console.error(err));
  }

  edit(index: number): void {
    this.editingIndex = index;
    this.expense = { ...this.expenses[index] };
  }

  resetForm(): void {
    this.expense = { name: '', description: '', amount: '', timestamp: new Date() };
    this.editingIndex = null;
  }
}
