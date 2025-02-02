import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"category",component:CategoryComponent},
    {path:"expenses",component:ExpensesComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: '**', redirectTo: 'login', pathMatch: 'full' },
];
