const date = 2050;
const status1 = 'student';   //added = & ;
let count = 0;              // changed from const to let to be able to change the count 

if (date === 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	console.log("April", 'Family Day')      //removed thedate assignment and replaced with April
	console.log("April", 'Freedom Day')
	count = count + 4

	if (status1 === "student") {
	  console.log("June", 'Youth Day')
	    count = count + 1
  }

	console.log("August", 'Women’s Day')
	console.log("September", 'Heritage Day')
	console.log("December", 'Day of Reconciliation')
	count = count + 3

	if (status1 === "parent") {
	  console.log("December", 'Christmas Day')
		count = count + 1
  }

	console.log("December", 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);