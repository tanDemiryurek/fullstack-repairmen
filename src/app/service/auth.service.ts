import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;
  private currentUser: any = null;
  userLoggedIn: EventEmitter<void> = new EventEmitter();

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/login', { email, password }).pipe(
      tap(user => {
        if (user) {
          this.isLoggedInStatus = true;
          this.currentUser = user;
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('currentUser', JSON.stringify(user)); // Store user in localStorage
          }
          this.userLoggedIn.emit(); // Emit event
        }
      })
    );
  }

  register(email: string, password: string, firstName: string, lastName: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/register', { email, password, firstName, lastName }).pipe(
      tap(user => {
        if (user) {
          this.isLoggedInStatus = true;
          this.currentUser = user;
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('currentUser', JSON.stringify(user)); // Store user in localStorage
          }
          this.userLoggedIn.emit(); // Emit event
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus || (typeof localStorage !== 'undefined' && localStorage.getItem('currentUser') !== null);
  }

  getCurrentUser(): any {
    if (!this.currentUser && typeof localStorage !== 'undefined') {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
    return this.currentUser;
  }

  logout(): void {
    this.isLoggedInStatus = false;
    this.currentUser = null;
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    this.userLoggedIn.emit(); // Emit event
  }
}
