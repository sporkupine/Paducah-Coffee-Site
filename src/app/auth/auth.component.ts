import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginMode: boolean = false;
  loading: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.loading = true;
    if (this.loginMode) {
      this.authService.login(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.authService.signup(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }
    form.reset();
  }

  ngOnInit(): void {}
}



