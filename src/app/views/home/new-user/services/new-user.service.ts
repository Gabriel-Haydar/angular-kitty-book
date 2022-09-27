import { environment } from "src/environments/environment";
import { NewUser } from "../new-user";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = environment.apiURL;

@Injectable({
  providedIn: "root",
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  register(newUser: NewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  getUserExists(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`);
  }
}
