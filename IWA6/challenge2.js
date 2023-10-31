const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0o0; //Octal literals are not allowed, as per VSCode tips. Using syntax 0o0 instead of 00
const minuteOfDay = 0o0; //Octal literals are not allowed, as per VSCode tips. Using syntax 0o0 instead of 00

// Only change below this line

//Check if midnight or if time is undifined
if (hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = parseFloat(tax) / 100; //ParesFloat-parse the string into a decimal number (8). /by100 to get decimal 0.08
  const startingAfterTax = salary * (1 - taxAsDecimal); // added()syntax to ensure correct order. 1 represent the fullamnt of salary before deductions
  const balance  = startingAfterTax - transport - food - rent; //fixed spelling error in balance. startingAfterTax instead of starting
  console.log('R' + balance .toFixed(2)); // Added 'R' currency. Changed fixed3 to fixed2 as per assignment.
  //moved console log up into this scope to have balance defined as avariable 
}


