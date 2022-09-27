import { environment } from "src/environments/environment";
import { Component, Input, OnInit } from "@angular/core";

const API = environment.apiURL;

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.css"],
})
export class AnimalComponent implements OnInit {
  private ogUrl: string = "";
  @Input() description: string = "";
  @Input() set url(url: string) {
    if (url.startsWith("data")) {
      this.ogUrl = url;
    } else {
      this.ogUrl = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.ogUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
