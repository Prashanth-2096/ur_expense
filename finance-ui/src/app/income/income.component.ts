import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  incomes = [
    { source: 'Salary', amount: 3000 },
    { source: 'Freelance', amount: 500 }
  ];

  newIncome = { source: '', amount: 0 };

  addIncome() {
    this.incomes.push({ ...this.newIncome });
    this.newIncome = { source: '', amount: 0 };
  }
}
