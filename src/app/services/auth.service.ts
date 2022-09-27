import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(user: string, pwd: string): Observable<HttpResponse<any>> {
    return this.http
      .post(
        'http://localhost:3000/user/login',
        {
          userName: user,
          password: pwd,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
