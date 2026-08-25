// Homework 1

const colors = ["წითელი", "მწვანე"];

colors.push("ლურჯი");
console.log(colors);

// Homework 2

const playlist = ['koshka', 'shugriva', 'nodara'];

playlist.pop('nodara');
console.log(playlist);

// Homework 3

const numbers = [10, 20, 30];

numbers.push(40, 50);
console.log(numbers.length);

// Homework 4

const cities = ["თბილისი", "ბათუმი", "ქუთაისი"];

console.log(cities.pop("ქუთაისი"));

// Homework 5

const animals = [];
const animals1 = prompt('Enter any animal: ');
const animals2 = prompt('Enter any animal: ');

animals.push(animals1, animals2);

console.log(animals);

// Homework 6

let stack = ["A", "B", "C"];

stack.pop();

let reversed = stack.push("C");

console.log(stack);

// Homework 7

const teams = ["lakers", 'clevland', "chicago bulls", "wosps"];

if (teams > 3) {
    teams.pop();
} else {
    teams.push("gia");
} 

console.log(teams)

// Homework 8

const transaction = [100, -50, 200];

const personal = prompt("Enter your cash amount: ")

if(personal >= 0) {
    transaction.push(personal)
} else {
    transaction.pop(personal)
}

console.log(transaction)

// homework 9

const warehouse = ["მაგიდა", "სკამი"]

warehouse.push("კარადა")

const isFull = false

if(warehouse === 3) {
    isFull = true;
    warehouse.pop();
}