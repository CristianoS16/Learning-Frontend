export class ShoppingCart {
  private readonly products: Product[] = [];

  addProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  amount(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const product_1 = new Product('Mouse', 100);
const product_2 = new Product('Keyboard', 250);

const cart = new ShoppingCart();

cart.addProduct(product_1, product_2);

console.log(cart.amount());
console.log(cart.total());
