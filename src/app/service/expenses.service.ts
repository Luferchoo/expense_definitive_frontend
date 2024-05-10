import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListExpenses } from '../interface/expense';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  
  private baseUrl = 'http://localhost:8080/expense';  // Asegúrate de que la URL es correcta

  constructor(private http: HttpClient) { }

  // getAll(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/all`).pipe(
  //     catchError(error => {
  //       throw 'error in getting categories: ' + error;
  //     })
  //   );
  // }
  getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}/all`);
  }
  update(id: number, expense: any): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}update/${id}`, expense);
  }

  created(expense: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}post/`, expense);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  get(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
