import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnimalsRoutingModule } from "./animals-routing.module";
import { AnimalsListComponent } from "./animals-list/animals-list.component";
import { AnimalComponent } from "./animal/animal.component";
import { CardModule } from "src/app/components/card/card.module";
import { AnimalPhotosGridComponent } from "./animal-photos-grid/animal-photos-grid.component";
import { AnimalDetailsComponent } from "./animal-details/animal-details.component";
import { CommentsComponent } from "./animal-details/comments/comments.component";

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalPhotosGridComponent,
    AnimalDetailsComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule, SharedModule],
})
export class AnimalsModule {}
