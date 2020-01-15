import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from 'data';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string): Observable<User> {
    // const options = {email: email, password: password};
    // return this.http.get<User>(environment.LOGIN_URL, options);
    localStorage.setItem('user', email);
    return of(USERS.find(u => u.email === email));
  }

  logout() {
    localStorage.clear();
  }
}
