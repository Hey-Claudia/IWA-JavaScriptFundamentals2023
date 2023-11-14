const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

//Check if anything has been assigned to Key9:
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet.`);
}

let copied = { ...holidays[christmas] }; //used...to copy "Christmass Object"
copied.name = "X-mas"; //updated object information
copied.date.setHours(0);
copied.date.setMinutes(0);

const isEarlier = copied.date < holidays[christmas].date;
console.log("New date is earlier:", isEarlier);

if (isEarlier) {
  holidays[christmas] = copied; //apply changes made to original object
}

//if (isEarlier) copied.date = correctDate
console.log("ID change:", holidays[christmas].id != copied.id || copied.id);
console.log(
  "Name change:",
  holidays[christmas].name != copied.name || copied.name
);
console.log(
  "Date change:",
  holidays[christmas].date != copied.date || copied.date
);
// used math.min/max to find min and max values of timestamps
//.map()used to create a array. This goes through each holiday and converts their date into a timesamp
const firstHolidayTimestamp = Math.min(
    ...Object.values(holidays).map((holiday) => holiday.date.getTime())
);

const lastHolidayTimestamp = Math.max(
  ...Object.values(holidays).map((holiday) => holiday.date.getTime())
);

// const firstHolidayTimestamp = Math.min(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const lastHolidayTimestamp = Math.max(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )


//create new object for date with timestamp above. GetDate get day of month from Date object and return numeric value of earliest holiday
//to string converts day and month into string
//padstart ensure the string representing day/month will have 2 characters eg01
const firstDay = new Date(firstHolidayTimestamp).getDate().toString().padStart(2,'0'); 
const firstMonth = (new Date(firstHolidayTimestamp).getMonth() + 1).toString().padStart(2, '0');
const lastDay = new Date(lastHolidayTimestamp).getDate().toString().padStart(2, '0');
const lastMonth = (new Date(lastHolidayTimestamp).getMonth() + 1).toString().padStart(2, '0');

//consolelog earliest and latest holida date in correct order d/m/y
console.log(`${firstDay}/${firstMonth}/${currentYear}`);  
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

//create array to extract all holiday object
//math.random used to create random number
const randomHoliday = Object.values(holidays)[Math.floor(Math.random()*9)]  
console.log(randomHoliday.date.toLocaleDateString('en-GB'));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
