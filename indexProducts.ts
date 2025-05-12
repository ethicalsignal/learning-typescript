import products from './products';

const productName : string = 'beanie';

const product = products.filter(product => product.name === productName)[0];

console.log(product);

function parseBoolean(value: string): boolean {
  if (value === 'true') return true;
  if (value === 'false') return false;
  throw new Error(`Invalid boolean string: ${value}`);
}

if (parseBoolean(product.preOrder) === true) {
  console.log('We will send you a message when your product is on its way.');
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '123 Broadway, New York City, New York';

const price: number = Number(product.price);

if (price >= 25) {
  shipping = 0;
  console.log('We provide free shipping for this product.');
} else {
  shipping = 5;
}

if (shippingAddress.match(/New York/)) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = price * taxPercent;
total = price + taxTotal + shipping;

console.log('--- Receipt ---');
console.log(`Product: ${product.name}`);
console.log(`Shipping Address: ${shippingAddress}`);
console.log(`Price: $${price.toFixed(2)}`);
console.log(`Tax: $${taxTotal.toFixed(2)}`);
console.log(`Shipping: $${shipping.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
