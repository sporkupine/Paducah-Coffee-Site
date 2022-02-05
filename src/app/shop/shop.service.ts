import { Injectable } from "@angular/core";
import { Product } from "../shared/product.model";

@Injectable({providedIn: "root"})

export class ShopService {

  private products: Product[] = [
    new Product(
      'Sample Product 1',
      14.99,
      '#'
    ),
    new Product(
      'Sample Product 2',
      14.99,
      '#'
    ),
    new Product(
      'Sample Product 3',
      16.99,
      '#'
    ),
    new Product(
      'Sample Product 4',
      44.99,
      '#'
    ),
    new Product(
      'Sample Product 5',
      9.99,
      '#'
    )
  ]

  getProducts(){
    return this.products.slice()
  }

}
