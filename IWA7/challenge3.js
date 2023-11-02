const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = "-9394";

const sarahName = "Sarah"  ;
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const leo = `${leoName}  ${leoSurname.trim()} (Owed: R ${parseFloat(leoBalance * -1).toFixed(2)})\n`;   //added $ (variable interpolation) changed sarahBalance to leoBalance
const sarah = `${sarahName}  ${sarahSurname.trim()} (Owed: R ${parseFloat(sarahBalance * -1).toFixed(2)})\n`; //parsefloat to ensure balance is a number. timed by-1 to get pos b
const totalOwed = parseFloat((parseFloat(leoBalance*-1)) + parseFloat(sarahBalance*-1)).toFixed(2)  //to ficed used to round of to 2 des
const owed = "Total amount owed: ";
const owedString = 
const result = `${leo}${sarah}\n${divider}\n ${owed} R${totalOwed}\n${divider}`  // \n and divider to ensure correct formatting 

console.log(result);



// \n used to insert a line break and and start a new line

//could not figure out how to ad space between the thousand

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat