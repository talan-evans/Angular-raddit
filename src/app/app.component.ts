import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from './core/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  searchItem = '';
  title = 'raddit';
  user: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnChanges() {
    this.user = localStorage.getItem('user');
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

  search() {
    this.router.navigate(['/r', this.searchItem])
  }
}
