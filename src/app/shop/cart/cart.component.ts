import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cart: Product[];
  ngOnInit(): void {
    this.cart = this.cartService.onGetCart();
  }

  onDeleteFromCart(index){

    this.cartService.onDelete(index);
  }

}
