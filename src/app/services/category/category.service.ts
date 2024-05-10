import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ListCategory } from '../../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/category';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ListCategory> {
    return this.http.get<ListCategory>(`${this.baseUrl}/all`).pipe(
      catchError(error => {
        throw 'error in getting categories: ' + error;
      })
    );
  }
  update(id: number, category: any): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}Update/${id}`, category);
  }

  created(category: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}Post/`, category);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  get(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

