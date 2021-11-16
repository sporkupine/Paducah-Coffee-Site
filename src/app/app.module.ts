import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { CartComponent } from './shop/cart/cart.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogPostItemComponent } from './blog/blog-post-item/blog-post-item.component';
import { ProductsComponent } from './shop/products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    ProductItemComponent,
    CartComponent,
    DropdownDirective,
    BlogComponent,
    HomeComponent,
    ErrorPageComponent,
    BlogPostItemComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
