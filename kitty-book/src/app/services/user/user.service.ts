import { Injectable } from "@angular/core";
import { TokenService } from "../token.service";
import { User } from "./user";
import jwt_decode from "jwt-decode";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  saveToken(token: string): void {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout(): void {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }
}
