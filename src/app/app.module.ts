import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { CartComponent } from './shop/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    ProductItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
