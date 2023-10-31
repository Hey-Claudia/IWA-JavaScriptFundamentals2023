//private 
const firstname = "Alex";   //changed all name+role to constant
//private 
const surname = "Naidoo";
//public 
const role = "Head of Marketing";

const display = `${firstname} ${surname} (${role})`;
document.querySelector('#alex').innerText = display;   //queryselector #alex selects that ID from HTML

export {role};