const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line



const primaryValid =!isNaN(+primaryPhone) //  +primaryPhone to see if primaryPhone can be converted from string into number. thus !isNaN(NaN) is true
const secondaryValid =!isNaN(+secondaryPhone)  // Here NaN thus !isNaN(NaN) is false as secondaryPhone is a valid numercial string
console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

//unary plus operater '+' tries to convert string into number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus