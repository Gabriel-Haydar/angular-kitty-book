import { Observable, switchMap } from "rxjs";
import { AnimalsService } from "./../animals.service";
import { UserService } from "../../../services/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Animals } from "../animals";

@Component({
  selector: "app-animals-list",
  templateUrl: "./animals-list.component.html",
  styleUrls: ["./animals-list.component.css"],
})
export class AnimalsListComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? "";
        return this.animalsService.userList(userName);
      })
    );
  }
}
