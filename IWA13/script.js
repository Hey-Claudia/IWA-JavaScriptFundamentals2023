let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

//Removed unneccessary = before funct declaration
const logCalc = () => {
  //Fixed the comparison operator in `logCalc` function
  //typeof calculated checks if the type of calculated is a number or a numerical string
  //!isNaN(calculated) checks if calculated is not NaN. Result is true is it is a numner or numerical string, otherwise false
  const isString = typeof calculated === "number" || !isNaN(calculated);
  //If isString is true, it converts the calculated variable to a number using Number(calculated)
  //otherwise, it keeps the current value of calculated
  const calculatedAsNumber = isString ? Number(calculated) : calculated; 
  //Adjusted the conditions to log the message only when `calculated` is > than 2.
  calculated = calculatedAsNumber + 1;
};

const calcUser = () => {
  //removed unneccessary = before funct declaration
  logCalc();
  if (calculated > 2) user = "John";
  if (calculated > 2) state = "requesting";
  if (calculated > 3) state = "idle";
};

const checkUser = () => {
  //removed unneccessary = before funct declaration
  if (user && state === "requesting") {        //Log a message to the console when both the user is defined and the state is 'requesting'
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();



// const checkUser = () => {
// 	if (user != null && state === 'requesting') {
// 		console.log(`User: ${user} (${calculated})`)
//         state !== null
//         state !== undefined  ==double equals is strict 