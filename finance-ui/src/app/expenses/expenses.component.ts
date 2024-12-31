import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  expenses = [
    { description: 'Groceries', amount: 100 },
    { description: 'Rent', amount: 1200 },
    { description: 'Subscription', amount: 15 }
  ];

  newExpense = { description: '', amount: 0 };

  addExpense() {
    this.expenses.push({ ...this.newExpense });
    this.newExpense = { description: '', amount: 0 };
  }
}
