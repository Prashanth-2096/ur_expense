import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Goal {
  description: string;
  target: number;
  saved: number;
}

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css'
})
export class SavingsComponent {
  goals: Goal[] = []; // Array to hold saving goals
  newGoal: Partial<Goal> = {}; // Object for new goal input

  // Function to calculate the progress percentage
  calculateProgress(goal: Goal): number {
    if (goal.target > 0) {
      return (goal.saved / goal.target) * 100;
    }
    return 0;
  }

  // Function to add a new goal
  addGoal(): void {
    if (this.newGoal.description && this.newGoal.target) {
      const newGoal: Goal = {
        description: this.newGoal.description,
        target: +this.newGoal.target, // Convert to number
        saved: 0 // Initialize saved amount to 0
      };
      this.goals.push(newGoal);
      this.newGoal = {}; // Reset newGoal object
    }
  }
}