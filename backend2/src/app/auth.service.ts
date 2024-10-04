import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = new BehaviorSubject<string|null>(null);
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { 
    this.token.next(localStorage.getItem('token'));
    this.isLoggedIn.next(!!localStorage.getItem('token'));
  }

  register(employee:any) {
    return this.http.post('http://localhost:5000//api/employee/register', employee)
  }

  login(credentials:any) {
    return this.http.post<{token:string}>('http://localhost:5000/api/employee/login', credentials).subscribe(
      response => {
        this.token.next(response.token);
        localStorage.setItem('token',response.token);
        this.isLoggedIn.next(true);
        this.router.navigate(['/tasks'])
      }
    );
  }

  logout() {
    this.token.next(null);
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login'])
  }

  getToken(){
    return this.token.value;
  }

}
