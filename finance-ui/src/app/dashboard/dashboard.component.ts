import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // Data for Income and Expense Summary Chart
  summaryChartData = [
    { data: [27017, 2000], label: 'Income and Expenses' }
  ];
  summaryChartLabels = ['Income', 'Expenses'];

  // Expense Tracking Data
  expenses = [
    { category: 'Rent', budget: 1000, spent: 900 },
    { category: 'Groceries', budget: 500, spent: 450 },
    { category: 'Utilities', budget: 300, spent: 320 },
    { category: 'Entertainment', budget: 200, spent: 250 }
  ];

  // Savings Goals Data
  savingsGoals = [
    { name: 'New Laptop', target: 1500, saved: 800 },
    { name: 'Vacation', target: 2000, saved: 600 },
    { name: 'Emergency Fund', target: 27017, saved: 2500 }
  ];

  constructor() {}

  ngOnInit(): void {}
}