import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  pwd: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.user, this.pwd).subscribe({
      next: () => this.router.navigateByUrl('/animals'),
      error: (error) => console.error(error),
    });
  }
}
