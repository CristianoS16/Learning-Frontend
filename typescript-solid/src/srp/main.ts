import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping_cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('test1', 12.2));
shoppingCart.addItem(new Product('test2', 22.99));
shoppingCart.addItem(new Product('test3', 50.0));

console.log(shoppingCart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
console.log(shoppingCart.total());
