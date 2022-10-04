import { FormGroup } from '@angular/forms';

export function pwdNotEqualsUserValidator(formGroup: FormGroup) {
  const user = formGroup.get('userName')?.value ?? '';
  const pwd = formGroup.get('password')?.value ?? '';

  if (user.trim() + pwd.trim()) {
    return user != pwd ? null : { pwdSameAsUser: true };
  } else {
    return null;
  }
}
