import { AnimalDetailsComponent } from "./animal-details/animal-details.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalsListComponent } from "./animals-list/animals-list.component";
import { AnimalsListResolver } from "./animals-list/animals-list.resolver";
import { NewAnimalComponent } from "./new-animal/new-animal.component";

const routes: Routes = [
  {
    path: "",
    component: AnimalsListComponent,
    resolve: {
      animals: AnimalsListResolver,
    },
  },
  {
    path: "new",
    component: NewAnimalComponent,
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
