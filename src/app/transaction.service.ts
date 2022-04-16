import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  getAllTransactions(): Observable<any>{
    return this.http.get<any[]>("http://localhost:7000/api/person")
  }
}
