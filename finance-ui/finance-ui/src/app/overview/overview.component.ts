import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chart } from 'chart.js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  incomeData: any[] = [];
  expensesData: any[] = [];
  savingsData: any[] = [];

  constructor(private dataService: AuthService) {}

  ngOnInit(): void {
    this.loadIncomeData();
    this.loadExpensesData();
    this.loadSavingsData();
  }

  loadIncomeData(): void {
    this.dataService.getIncome().subscribe(data => {
      this.incomeData = data;
    });
  }

  loadExpensesData(): void {
    this.dataService.getExpenses().subscribe(data => {
      this.expensesData = data;
    });
  }

  loadSavingsData(): void {
    this.dataService.getSavings().subscribe(data => {
      this.savingsData = data;
    });
  }

  calculateProgress(goal: any): number {
    if (goal.target === 0) return 0;
    return (goal.saved / goal.target) * 100;
  }
}