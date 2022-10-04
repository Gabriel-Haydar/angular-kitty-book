import { Router } from "@angular/router";
import { AnimalsService } from "./../animals.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { finalize } from "rxjs";
import { HttpEvent, HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-new-animal",
  templateUrl: "./new-animal.component.html",
  styleUrls: ["./new-animal.component.css"],
})
export class NewAnimalComponent implements OnInit {
  animalForm!: FormGroup;
  imageFile!: File;
  preview!: string;
  progress = 0;

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      imageFile: ["", Validators.required],
      description: ["", Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload(): void {
    const allowComments = this.animalForm.get("allowComments")?.value ?? false;
    const description = this.animalForm.get("description")?.value ?? "";
    this.animalsService
      .upload(description, allowComments, this.imageFile)
      .pipe(finalize(() => this.router.navigate(["animals"])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.progress = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.error(error)
      );
  }

  saveImageFile(file: any): void {
    const [imageFile] = file?.files;
    this.imageFile = imageFile;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(imageFile);
  }
}
