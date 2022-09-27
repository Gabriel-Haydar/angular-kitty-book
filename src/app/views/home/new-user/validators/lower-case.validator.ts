import { AbstractControl } from '@angular/forms';

export function isLowerCaseValidator(control: AbstractControl) {
  const value: string = control.value;

  if (value != value.toLowerCase()) {
    return { isLowerCase: true };
  } else {
    return null;
  }
}
