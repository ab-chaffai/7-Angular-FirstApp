import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('7-Angular-FirstApp');

  public courrentRoute: any;

  constructor(private router: Router) {}
  protected goToHome() {
    this.courrentRoute = 'home';
    this.router.navigateByUrl('/home');
  }

  protected goToProducts() {
    this.courrentRoute = 'products';
    this.router.navigateByUrl('/products');
  }
}
