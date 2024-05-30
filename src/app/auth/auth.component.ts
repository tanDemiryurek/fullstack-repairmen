import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  handleAuth(form: NgForm) {
    console.log("handleAuth called");

    if (!form.valid) {
      console.log("Form is invalid");
      console.log(form.controls);
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    let authObs: Observable<AuthResponse>;

    if (this.isLoginMode) {
      console.log("Login mode");
      authObs = this.authService.login(email, password);
    } else {
      console.log("Register mode");
      authObs = this.authService.register(email, password, firstName, lastName);
    }

    authObs.subscribe({
      next: (response) => {
        console.log("Response received:", response);
        const role = response.role;
        console.log("User role:", role);
        if (role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (role === 'COMPANY') {
          this.router.navigate(['/sirket']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error("Error received:", error);
        alert('Login failed. Please check your credentials.');
      }
    });

    form.reset();
  }
}
