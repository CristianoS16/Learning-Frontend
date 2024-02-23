/*
Interface segregation principle
*/
import { EnterpriseCustomer } from './classes/customer';
import { TenPercentDiscount } from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping_cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const enterpriseCustomer = new EnterpriseCustomer(
  'Company One',
  '000-00-0000/00',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
shoppingCart.addItem(new Product('test1', 12.2));
shoppingCart.addItem(new Product('test2', 22.99));
shoppingCart.addItem(new Product('test3', 50.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
