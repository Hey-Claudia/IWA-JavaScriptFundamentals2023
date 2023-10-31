const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {                                              //added =
	name: leoName,                                         // removed leoSurname as surname is declared in leoNmae
	balance: leoBalance,                                  // changed = to : as it is the correct syntax
	age: 24,
    accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',       //added '' around 47afb389-8014-4d0b-aff3-e40203d2107f because it has hyphens
	address: {
		number: leoNumber,
		street: leoStreet,
	    'postal-code': leoPostal,                         //added '' around postal-code because it has a hyphen
	}
};

const sarah = {
	name: sarahName.trimEnd() + (' ') + sarahSurname,    //fixed spelling error. H in Sarah was left out. Added.trimEnd to remove space next to sarah's name
    balance: sarahBalance,
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',  // access id changed to accessID in order to be correct camelcase 
	address: {
		number: sarahNumber,
		street: sarahStreet,
		'postal-code': sarahPostal,
	}
};

console.log(leo, leo.address['postal-code']);
console.log(sarah, sarah.address['postal-code'], parseFloat(sarahBalance).toFixed(2))    //parsefloat the balance to ensure it is a number and then used tofixed2 to round of her balance