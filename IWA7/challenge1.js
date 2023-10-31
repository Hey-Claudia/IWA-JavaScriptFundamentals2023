//The following code is meant to add the following three values together and log 10. However, it currently logs 343 instead. Please correct the mistake, and explain why 343 was logged initially:

// const value = "3"
// console.log(value + 4 + value)

//The original code did not work as intended because "3" is a string and the + operator then concatenates them/ IOW it puts the 3 numbers next to each other to create a new number instead of adding them mathematically.

//NEW CODE 1
//By parsing the string "3" aka the value it is converted into a number.
const value = "3";
console.log(parseInt(value) + 4 + parseInt(value));

//NEW CODE 2
console.log(Number(value) + 4 + Number(value)); //the number funtion can also convert value into a number

//NEW CODE 3
//Another way to fix the code is by using the Unary Plus Operator. + evaulates the value and convers it into a number if it isnt already/
console.log(+value + 4 + +value);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus

//NEW CODE 4
const value1 =3
console.log(value1 + 4 + value1) 