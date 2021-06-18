let phrase = "Hello";
//let myName = "Cheryl";

//console.log(`${phrase} ${myName}`);

//Booleans
let on = true;
let off = false;

//Null
//Intentional empty variable
let empty = null;

//Undefined
//Starts empty but intend to fill in
//let undef = undefined;
let undef;

//Numbers
let degrees = 90;
let precise = 9999999999999999;
console.log(precise);

//Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `back ticks`

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(first, second);

//Objects
let frodo = {
    race: "Hobbit",
    rings: 1,
    cloak: true
}

console.log(frodo);

//Aarays
//think of as object of a number list starting at 0,1,2,etc
let list = ["Hobbit", 1, true];

console.log(list);

/*
DataType literals are fixed values that we as developers insert into
the code, not data that is coming from a third party source.
*/

let myName = "Cheryl";
console.log(myName.length);

console.log(myName.toUpperCase());

let home = "My home is in Indianapolis";
console.log(home.includes("Indianapolis"));

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "))

