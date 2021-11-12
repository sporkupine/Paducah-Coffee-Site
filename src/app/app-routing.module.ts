import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./shop/cart/cart.component";
import { ProductsComponent } from "./shop/products/products.component";
import { ShopComponent } from "./shop/shop.component";
import { AboutComponent} from "./about/about.component";
import { BlogPostItemComponent } from "./blog/blog-post-item/blog-post-item.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: BlogPostItemComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'auth', component: AuthComponent},
  { path: '**', component: ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
