import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  public products: any;
  public searchQuery: string = '';
  constructor() {}
  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99 },
      { id: 3, name: 'Product 3', price: 30.99 },
      { id: 4, name: 'Product 4', price: 40.99 },
    ];
  }

  search() {
    console.log(this.searchQuery);
    let result = [];
    for (let p of this.products) {
      if (p.name.includes(this.searchQuery)) {
        result.push(p);
      }
    }
    this.products = result;
  }

  onDelete(p: any): void {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }
}
