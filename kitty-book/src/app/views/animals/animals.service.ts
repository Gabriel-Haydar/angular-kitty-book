import { TokenService } from "./../../services/token.service";
import { catchError, map, mapTo, Observable, of, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Animal, Animals } from "./animals";
import { environment } from "src/environments/environment";

const API = environment.apiURL;
const NOT_MODIFIED = "304";

@Injectable({
  providedIn: "root",
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userList(userName: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${userName}/photos`);
  }

  searchById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http
      .post<Animal>(`${API}/photos/${id}/like`, {}, { observe: "response" })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }

  upload(description: string, allowComments: boolean, imageFile: File) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("allowComments", allowComments ? "true" : "false");
    formData.append("imageFile", imageFile);
    return this.http.post(`${API}/photos/upload`, formData, {
      observe: "events",
      reportProgress: true,
    });
  }
}
