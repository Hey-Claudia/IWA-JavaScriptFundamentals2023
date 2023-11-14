const add = (a, b) => a + b;                 //fixed funtion declaration 
const multiply = (a, b) => a * b;         //fixed funcion declaration 

function internal() {
	const added = add(this.internal.a, this.internal.b);           //used add function
	const multiplied = multiply(added, this.internal.c);  //used multiply function
	console.log(multiplied)
	return multiplied
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()