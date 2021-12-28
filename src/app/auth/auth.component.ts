import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginMode: boolean = false;
  loading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<AuthResponseData>;

    this.loading = true;
    if (this.loginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }
    form.reset();

    authObservable.subscribe(
      (responseData) => {
        console.log(responseData);
        this.loading = false;
        this.router.navigate(['home']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.loading = false;
      }
    );
  }
  ngOnInit(): void {}
}
