import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from 'data';
import { User } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<string> {
    const options = {email: email, password: password};
    return this.http.post<string>(environment.LOGIN_URL, options);
    // localStorage.setItem('user', email);
    // return of(USERS.find(u => u.email === email));
  }

  logout() {
    localStorage.clear();
  }
}
