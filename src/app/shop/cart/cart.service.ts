import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];




  onAddtoCart(product:Product) {
    this.cart.push(product);
  }

  onGetCart(){
    return this.cart;
  }

  onDelete(i: number){
    this.cart.splice(i, 1)
  }

  onCheckout(){
    this.cart.splice(0, this.cart.length);
  }
  constructor() { }
}

