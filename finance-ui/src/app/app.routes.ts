import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';
import { SavingsComponent } from './savings/savings.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login' , component: LoginComponent}, // This will be your main content component
    { path: 'overview', component: OverviewComponent},
    { path: 'expenses', component: ExpensesComponent},
    { path: 'income', component: IncomeComponent},
    { path: 'savings', component: SavingsComponent},
    { path: 'profile', component:ProfileComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
    
];