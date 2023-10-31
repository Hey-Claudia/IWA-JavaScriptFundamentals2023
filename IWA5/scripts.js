const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0; //removed '' to make number

let customers = 1;
let userLocation = "RSA"; //set to 1(number),RSA and ZAR as example. 'Let' will enable the variable to change
let currency = "R";
let shipping = null;

if (userLocation === "NK") {
  console.log(BANNED_WARNING);
} else {
  if (userLocation === "RSA") {
    shipping = 400;
  }
  if (userLocation === "NAM") {
    shipping = 600;
    currency = "N$";
  } else {
    shipping = 800;
  }

  const shoes = 300 * 1;
  const toys = 100 * 5;
  const shirts = 150 * NONE_SELECTED; //defined these as const
  const batteries = 35 * 2;
  const pens = 5 * NONE_SELECTED;

  const totalCost = shoes + toys + shirts + batteries + pens; //added all the items together to create a totalCost variable to make the below code easier

  if (totalCost >= 1000 && customers === 1) {
    if (userLocation === "RSA" || userLocation === "NAM") {
      shipping = 0; //reset shipping to 0
    } else {
      console.log(FREE_WARNING);
    }
  }

  if (shipping === 0 && customers !== 1) {
    console.log("Total:", currency + totalCost);
  } else {
    console.log("Total:", currency + totalCost + shipping);
  }
}
