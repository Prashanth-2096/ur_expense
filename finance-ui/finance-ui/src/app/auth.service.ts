import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8080'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }
   // Register (Optional)
   register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, data);
  }

  // Expenses
  getExpenses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/finance/transactions`);
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/finance/transactions`, expense);
  }

  // Income
  getIncome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/finance/income`); // Ensure you have this endpoint on your backend
  }

  addIncome(income: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/finance/income`, income); // Ensure you have this endpoint on your backend
  }

  // Savings Goals
  getSavings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/finance/savings`); // Ensure you have this endpoint on your backend
  }

  addSavingsGoal(goal: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/finance/savings`, goal); // Ensure you have this endpoint on your backend
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/profile`); // Adjust endpoint as needed
  }
  
}