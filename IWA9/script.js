const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]) /100;          //parseFloat to make tax a number and /100 to get decimal (0.12) 
//calculated taxableSalary by subtracting 1 from taxAsDecimal to give non taxed amount of salary.timed that by salary to get taxable salary
const taxableSalary = salary * (1 - taxAsDecimal);           
const rentKey = `${size}-${lodging}`;                   //to determine the rent amount I created rentKey by combing lodging and size var. thus'apartment-large'
const rentAmount = rent[rentKey];                      //retrieve the rentKey from rent to get to the 800 of large-apartment 
const totalExpenses = expenses.transport + expenses.food + rentAmount; // all expenses
const totalBalance = taxableSalary - totalExpenses; //- exspense from salary to get final answer

console.log(totalBalance.toFixed(2));  //toFixed 2 to round of to 2 decimals

//console.log(totalExpenses)
//console.log(taxAsDecimal)
//console.log(taxableSalary)