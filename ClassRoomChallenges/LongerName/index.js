let myName = "Cheryl";
let herName = "Kimberly";

console.log(myName.length);
console.log(herName.length);

const myNameLength = myName.length;
const herNameLength = herName.length;

if (myNameLength > herNameLength) {
    console.log(`${myName}'s name is longer than ${herName}'s`);
} else if (myNameLength < herNameLength) {
    console.log(`${herName}'s name is longer than ${myName}'s`);
} else {
    console.log(`${herName} and ${myName} are the same length`);
} 

console.log(myName.length  herName.length)