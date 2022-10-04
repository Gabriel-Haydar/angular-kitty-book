import { UserService } from "./../../../services/user/user.service";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of, switchMap, take } from "rxjs";
import { Animals } from "../animals";
import { AnimalsService } from "../animals.service";

@Injectable({
  providedIn: "root",
})
export class AnimalsListResolver implements Resolve<Animals> {
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? "";
        return this.animalsService.userList(userName);
      }),
      take(1)
    );
  }
}
