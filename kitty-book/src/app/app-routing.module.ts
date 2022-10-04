import { LoginGuard } from "./services/login.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then((mod) => mod.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: "animals",
    loadChildren: () =>
      import("./views/animals/animals.module").then((mod) => mod.AnimalsModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
