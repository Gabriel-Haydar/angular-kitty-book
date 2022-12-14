import { MessageModule } from "./../../components/message/message.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [LoginComponent, HomeComponent, NewUserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ],
})
export class HomeModule {}
