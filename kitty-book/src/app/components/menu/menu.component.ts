import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  showMenu: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
