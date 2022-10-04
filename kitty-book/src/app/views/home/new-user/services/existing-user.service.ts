import { AbstractControl } from '@angular/forms';
import { NewUserService } from './../services/new-user.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExistingUserService {
  constructor(private newUserService: NewUserService) {}

  isExistingUser() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.getUserExists(userName)),
        map((exists) => (exists ? { exists: true } : null)),
        first()
      );
    };
  }
}
