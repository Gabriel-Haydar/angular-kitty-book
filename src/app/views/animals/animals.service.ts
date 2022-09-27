import { TokenService } from "./../../services/token.service";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Animals } from "./animals";
import { environment } from "src/environments/environment";

const API = environment.apiURL;

@Injectable({
  providedIn: "root",
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userList(userName: string): Observable<Animals> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append("x-access-token", token);
    return this.http.get<Animals>(`${API}/${userName}/photos`, {
      headers,
    });
  }
}
