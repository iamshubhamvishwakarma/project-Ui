import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./Home/about/about.component";
import { HomeComponent } from "./Home/home/home.component";
import { ProfileComponent } from "./Home/profile/profile.component";
import { WishlistComponent } from "./Home/wishlist/wishlist.component";
import { ProductHolderComponent } from "./ProductDisplay/product-holder/product-holder.component";
import { SitesComponent } from "./ViewAll/sites/sites.component";
import { DealsComponent } from "./ViewAll/deals/deals.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search", component: ProductHolderComponent }, //add search in double cots
  { path: "home", component: HomeComponent },
  { path: "deals", component: DealsComponent },
  { path: "sites", component: SitesComponent },
  { path: "profile", component: ProfileComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
