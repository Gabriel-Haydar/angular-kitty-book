import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnimalsRoutingModule } from "./animals-routing.module";
import { AnimalsListComponent } from "./animals-list/animals-list.component";
import { AnimalComponent } from "./animal/animal.component";
import { CardModule } from "src/app/components/card/card.module";
import { AnimalPhotosGridComponent } from './animal-photos-grid/animal-photos-grid.component';

@NgModule({
  declarations: [AnimalsListComponent, AnimalComponent, AnimalPhotosGridComponent],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
