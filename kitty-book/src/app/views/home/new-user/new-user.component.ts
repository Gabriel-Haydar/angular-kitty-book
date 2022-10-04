import { Router } from '@angular/router';
import { ExistingUserService } from './services/existing-user.service';
import { NewUserService } from './services/new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { isLowerCaseValidator } from './validators/lower-case.validator';
import { pwdNotEqualsUserValidator } from './validators/user-pwd.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existingUserService: ExistingUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [isLowerCaseValidator],
          [this.existingUserService.isExistingUser()],
        ],
        password: [''],
      },
      {
        validator: [pwdNotEqualsUserValidator],
      }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.register(newUser).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (error) => console.error(error),
      });
    }
  }
}
