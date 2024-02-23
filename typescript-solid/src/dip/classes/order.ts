import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping_cart_protocol';
import { MessagingProtocol } from '../services/interfaces/messaging-protocol';
import { PersistencyProtocol } from '../services/interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
