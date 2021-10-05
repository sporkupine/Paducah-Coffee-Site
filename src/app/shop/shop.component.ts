import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.products=this.shopService.getProducts();
  }

}
