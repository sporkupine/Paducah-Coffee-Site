import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from './cart/cart.service';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() product: Product;
  products: Product[] = [];

  constructor(private shopService: ShopService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products=this.shopService.getProducts();
  }


  onAddToCart(product: Product){
    this.cartService.onAddtoCart(product);
  }

}
