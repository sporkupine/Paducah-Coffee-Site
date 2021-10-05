import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];




  onAddtoCart(product:Product) {
    this.cart.push(product);
  }

  onGetCart(){
    return this.cart.slice();
  }
  constructor() { }
}
