import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log("NavbarComponent initialized");
    this.loadUserRole();

    // Listen for login/logout events
    this.authService.userLoggedIn.subscribe(() => {
      this.loadUserRole();
    });
  }

  loadUserRole() {
    console.log("loadUserRole called");
    const user = this.authService.getCurrentUser();
    console.log("Current user in navbar:", user);
    if (user && user.role) {
      this.role = user.role;
      console.log("Role loaded in navbar:", this.role);
    } else {
      this.role = '';
    }
  }

  logout() {
    this.authService.logout();
    this.role = '';
    this.router.navigate(['/login']);
  }

  goToServicePage() {
    this.router.navigate(['/services']);
  }

  goToContactaboutusPage() {
    this.router.navigate(['/contactaboutus']);
  }
}
