import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
 @Input() product : Product;

 constructor(private cartService: CartService) {}

 addProductToCart() {
   const cartItem: CartItem = {
     productId: this.product.id,
     quantity: 1,
   };
   this.cartService.setCartItem(cartItem);
 }

}
