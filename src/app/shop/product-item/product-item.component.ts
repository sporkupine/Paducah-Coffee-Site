import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }



}
