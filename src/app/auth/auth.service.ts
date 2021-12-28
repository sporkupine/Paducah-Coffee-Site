import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn: boolean = false;

  tokenExpirationTimer: any;

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuth(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuth(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationTime =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationTime);
    }
  }

  onLogout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationTime: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.onLogout();
    }, expirationTime);
  }

  private handleAuth(
    email: string,
    localId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, localId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred.';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage =
          'We already have an account for this email address. Did you mean to sign in?';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no account associated with this email address. Did you mean to sign up?';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password you entered was incorrect for this account. Please contact an administrator if you have forgotten your password.';
        break;
    }
    return throwError(errorMessage);
  }
}
