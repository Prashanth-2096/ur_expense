import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],  // Add HttpClientModule to the imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  message: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.model).subscribe(
      (response: any) => {
        console.log(response)
        if (response.success) {
          this.message = 'Login Successful';
          this.router.navigate(['/dashboard']);
        } else {
          this.message = 'Invalid email or password';
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.message = 'An error occurred. Please try again.';
      }
    );
  }
}
