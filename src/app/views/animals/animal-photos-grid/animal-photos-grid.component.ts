import { Component, Input, OnInit } from "@angular/core";
import { Animals } from "../animals";

@Component({
  selector: "app-animal-photos-grid",
  templateUrl: "./animal-photos-grid.component.html",
  styleUrls: ["./animal-photos-grid.component.css"],
})
export class AnimalPhotosGridComponent implements OnInit {
  @Input()
  animals: Animals = [];

  constructor() {}

  ngOnInit(): void {}
}
