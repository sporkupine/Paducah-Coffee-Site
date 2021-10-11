import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.products = this.shopService.getProducts();
  }

}
