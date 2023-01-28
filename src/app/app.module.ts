import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component'
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'checkout',
    component:CheckoutComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        ShopComponent,
        GalleryComponent,
        CartComponent,
        CheckoutComponent,
        HomeComponent,
        JoinUsComponent,
        ProductCardComponent,
        CartIconComponent,
        OrderSummaryComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
        FormsModule, ReactiveFormsModule,
      
    ]
})
export class AppModule { }
