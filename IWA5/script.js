const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;

let customers = 1;
let location = 'RSA'; // Assign the user's location
let currency = 'R';
let shipping = null;

if (location === 'RSA') {
  shipping = 400;
} else if (location === 'NAM') {
  shipping = 600;
  currency = 'N$';
} else {
  shipping = 800;
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCost = shoes + toys + shirts + batteries + pens;

if (totalCost >= 1000 && customers === 1) {
  if (location === 'RSA' || location === 'NAM') {
    shipping = 0; // Free shipping
  }
}

if (shipping === 0 && customers !== 1) {
  console.log('WARNING');
} else {
  console.log('Price:', currency + totalCost + shipping);
}
