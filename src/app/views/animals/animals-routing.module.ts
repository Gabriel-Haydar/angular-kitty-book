import { AnimalDetailsComponent } from "./animal-details/animal-details.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalsListComponent } from "./animals-list/animals-list.component";

const routes: Routes = [
  {
    path: "",
    component: AnimalsListComponent,
  },
  {
    path: ":animalId",
    component: AnimalDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
