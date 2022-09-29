import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Animals } from "../animals";

@Component({
  selector: "app-animals-list",
  templateUrl: "./animals-list.component.html",
  styleUrls: ["./animals-list.component.css"],
})
export class AnimalsListComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animals = this.activatedRoute.snapshot.data["animals"];
    });
  }
}
