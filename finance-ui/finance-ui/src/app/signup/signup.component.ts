import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  model = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };
  message: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Validate required fields
    if (!this.model.username || !this.model.email || !this.model.phone || !this.model.password) {
      this.message = 'All fields are required.';
      return;
    }

    if (this.model.password !== this.model.confirmPassword) {
      alert('Passwords do not match!');
      console.log("Hello")
      return;
    }

    this.http.post('http://localhost:8080/auth/signup', {
      username: this.model.username,
      email: this.model.email,
      phone: this.model.phone,
      password: this.model.password,
      confirm_password:this.model.confirmPassword
    }).subscribe(response => {
      console.log('Signup successful', response);
      this.router.navigate(['/login']); // Redirect to login page after signup
    }, error => {
      console.error('Signup failed', error);
    });
  }

  ngOnInit(): void {}
}