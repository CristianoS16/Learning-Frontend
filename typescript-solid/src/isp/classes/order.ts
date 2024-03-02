import { OrderStatus } from '../interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './customer-protocol';
import { ShoppingCart } from './shopping_cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Empty Shopping Cart');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Order finished. Total: ${this.cart.totalWithDiscount()}.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
