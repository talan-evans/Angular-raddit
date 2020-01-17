import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe(data => {
      localStorage.setItem('token', data);
      localStorage.setItem('user', this.email);
      this.router.navigate(["/"]);
    },
    err => {
      alert('you done goofed up, a a ron');
    });
  }

}
