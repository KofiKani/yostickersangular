import { Component, OnInit } from '@angular/core';
import { CartItemDetailed } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart-service.service';
import { OrdersService } from 'src/app/services/orders.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService
  ) {}
  ngOnInit(): void {
    this._getCartDetails();
  }

  _getCartDetails() {
    this.cartService.cart$.pipe().subscribe((resCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = resCart?.items.length ?? 0;
      resCart.items.forEach((cartItem) => {
        this.ordersService
          .getProduct(cartItem.productId).subscribe((resproducts) => {
            this.cartItemsDetailed.push({
              product: resproducts,
              quantity: cartItem.quantity,
            });
          });
      });
    });
  }
  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }

  updateCartItemQuantity(event, cartItem: CartItemDetailed) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value,
      },
      true
    );
  }

  increaseQuantity(cartItem: CartItemDetailed) {
    cartItem.quantity++;
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: cartItem.quantity,
      },
      true
    );
  }
  decreaseQuantity(cartItem: CartItemDetailed) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.cartService.setCartItem(
        {
          productId: cartItem.product.id,
          quantity: cartItem.quantity,
        },
        true
      );
    }
  }
}