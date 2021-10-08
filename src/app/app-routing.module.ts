import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./shop/cart/cart.component";
import { ShopComponent } from "./shop/shop.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'blog', component: BlogComponent},
  { path: '**', component: ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
