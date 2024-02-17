type CartItem = {
  name: string;
  price: number;
};
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => (total += next.price), 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Empty Shopping Cart');
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Order finished. Total: ${this.total()}.`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Sent Message: ', msg);
  }

  saveOrder(): void {
    console.log('order saved.');
  }

  clear(): void {
    console.log('Cleaning cart...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'test1', price: 12.2 });
shoppingCart.addItem({ name: 'test2', price: 22.99 });
shoppingCart.addItem({ name: 'test3', price: 50.0 });

console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
console.log(shoppingCart.total());
