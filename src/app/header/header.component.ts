import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isShown: boolean = false;
  userSub: Subscription;
  isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  onHome() {
    this.router.navigate(['home'], { relativeTo: this.route });
  }
  onShop() {
    this.router.navigate(['shop'], { relativeTo: this.route });
  }
  onBlog() {
    this.router.navigate(['blog'], { relativeTo: this.route });
  }
  onProducts() {
    this.router.navigate(['products'], { relativeTo: this.route });
  }
  onAbout() {
    this.router.navigate(['about'], { relativeTo: this.route });
  }
  onContactUs() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
  onLogout() {
    this.authService.onLogout();
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }
}
