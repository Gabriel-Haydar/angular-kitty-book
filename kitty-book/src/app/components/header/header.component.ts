import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$ = this.userService.getUser();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
}
