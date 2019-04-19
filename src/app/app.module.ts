import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SliderComponent } from "./Slider/slider/slider.component";
import { BotComponent } from "./Bot/bot/bot.component";
import { WindowComponent } from "./Bot/window/window.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { MessageComponent } from "./Bot/message/message.component";
import { FilterPipe } from "./filter.pipe";
import { HighlightPipe } from "./highlight.pipe";
import { HomeComponent } from "./Home/home/home.component";
import { SideNavComponent } from "./Shared/side-nav/side-nav.component";
import { LoaderComponent } from "./Shared/loader/loader.component";
import { WishlistComponent } from "./Home/wishlist/wishlist.component";
import { ProfileComponent } from "./Home/profile/profile.component";
import { AboutComponent } from "./Home/about/about.component";
import { SearchComponent } from "./Shared/search/search.component";
import { ItemComponent } from "./Deals/item/item.component";
import { NavBarComponent } from "./Shared/nav-bar/nav-bar.component";
import { ItemHolderComponent } from "./Deals/item-holder/item-holder.component";
import { FindScrollDirective } from "./Directive/find-scroll.directive";
import { ProductGridComponent } from "./ProductDisplay/product-grid/product-grid.component";
import { ProductListComponent } from "./ProductDisplay/product-list/product-list.component";
import { ProductListItemComponent } from "./ProductDisplay/product-list-item/product-list-item.component";
import { ProductGridItemComponent } from "./ProductDisplay/product-grid-item/product-grid-item.component";
import { ProductHolderComponent } from "./ProductDisplay/product-holder/product-holder.component";
import { ItemPlaceholderComponent } from "./Shared/item-placeholder/item-placeholder.component";
import { OfferBySiteComponent } from "./Deals/offer-by-site/offer-by-site.component";
import { SocialOptionsComponent } from "./Home/social-options/social-options.component";
import { SitePlaceholderComponent } from "./Shared/site-placeholder/site-placeholder.component";
import { BannersComponent } from "./Home/banners/banners.component";
import { CategoryComponent } from "./Home/category/category.component";
import { GiftcardComponent } from "./Home/giftcard/giftcard.component";
import { DealsComponent } from "./ViewAll/deals/deals.component";
import { SitesComponent } from "./ViewAll/sites/sites.component";
import { CategoriesComponent } from "./ViewAll/categories/categories.component";
import { AuthModule } from "./Auth/auth-module/auth-module.module";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BotComponent,
    WindowComponent,
    MessageComponent,
    FilterPipe,
    HighlightPipe,
    HomeComponent,
    SideNavComponent,
    LoaderComponent,
    AboutComponent,
    WishlistComponent,
    ProfileComponent,
    SearchComponent,
    ItemComponent,
    NavBarComponent,
    ItemHolderComponent,
    FindScrollDirective,
    ProductGridComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductHolderComponent,
    ItemPlaceholderComponent,
    OfferBySiteComponent,
    SocialOptionsComponent,
    SitePlaceholderComponent,
    BannersComponent,
    CategoryComponent,
    GiftcardComponent,
    DealsComponent,
    SitesComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
