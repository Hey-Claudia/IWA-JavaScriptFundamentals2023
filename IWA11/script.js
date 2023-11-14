// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending

const order1 = document.querySelector('[data-key="order1"]');  //select the dl elements from html using query selector
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');


//order1
//if order 1 exsists:update it's content
if (order1) {
  const biscuitsOrder1 = order1.querySelector('.biscuits .count'); //use querySelector on order to select the elements within that order eg biscuits etc
  const donutsOrder1 = order1.querySelector('.donuts .count');      //using.count selects the count element for item within the order
  const pancakesOrder1 = order1.querySelector('.pancakes .count');
  const statusOrder1 = order1.querySelector('.status dd');

  biscuitsOrder1.textContent = order1.dataset.biscuits;  //replace the textcontent with value from data atrributes 
  donutsOrder1.textContent = order1.dataset.donuts;
  pancakesOrder1.textContent = order1.dataset.pancakes;
  statusOrder1.textContent = order1.dataset.delivered === 'true' ? 'Delivered' : 'Pending'; //if true set to deliverd, otherwise pending
}

//repeat steps for remainig orders:

//order2
if (order2) {
  const biscuitsOrder2 = order2.querySelector('.biscuits .count');
  const donutsOrder2 = order2.querySelector('.donuts .count');
  const pancakesOrder2 = order2.querySelector('.pancakes .count');
  const statusOrder2 = order2.querySelector('.status dd');

  biscuitsOrder2.textContent = order2.dataset.biscuits;
  donutsOrder2.textContent = order2.dataset.donuts;
  pancakesOrder2.textContent = order2.dataset.pancakes;
  statusOrder2.textContent = order2.dataset.delivered === 'true' ? 'Delivered' : 'Pending';
}
//order3
if (order3) {
  const biscuitsOrder3 = order3.querySelector('.biscuits .count');
  const donutsOrder3 = order3.querySelector('.donuts .count');
  const pancakesOrder3 = order3.querySelector('.pancakes .count');
  const statusOrder3 = order3.querySelector('.status dd');

  biscuitsOrder3.textContent = order3.dataset.biscuits;
  donutsOrder3.textContent = order3.dataset.donuts;
  pancakesOrder3.textContent = order3.dataset.pancakes;
  statusOrder3.textContent = order3.dataset.delivered === 'true' ? 'Delivered' : 'Pending';
}


//used if statemens because without it I got 'Cannot set properties of nul' error. Qeuryselector wan't finding the elements I was selecting. 
//using the if statement lets the code check that the spesific element (the orders) exisit in the DOM before atemptig the change/update the conent