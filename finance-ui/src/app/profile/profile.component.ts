import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any = {};  // User object to store profile data
  email: string = '';  // Store the user's email

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Retrieve the stored email from localStorage
    this.email = localStorage.getItem('email') || '';  
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    if (this.email) {
      this.authService.getUserProfile(this.email).subscribe(
        (data) => {
          this.user = data;  // Assign the profile data to the user object
        },
        (error) => {
          console.error('Error fetching user profile', error);
        }
      );
    } else {
      console.error('Email not found. Unable to load profile.');
    }
  }

  editProfile(): void {
    // Implement logic to edit profile
  }
}