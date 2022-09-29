import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Animal } from "../animals";
import { AnimalsService } from "../animals.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-animal-details",
  templateUrl: "./animal-details.component.html",
  styleUrls: ["./animal-details.component.css"],
})
export class AnimalDetailsComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params["animalId"];
    this.animal$ = this.animalsService.searchById(this.animalId);
  }

  like(): void {
    this.animalsService.like(this.animalId).subscribe((like) => {
      if (like) this.animal$ = this.animalsService.searchById(this.animalId);
    });
  }

  delete(): void {
    this.animalsService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(["/animals/"]);
      },
      (error) => console.error(error)
    );
  }
}
