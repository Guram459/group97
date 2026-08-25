// homework 1

function rollDice() {
    let dice = Math.floor(Math.random() * 6 + 1);
    const roll = dice === 6 || dice === 5 ? 'Your The Winner!' : 'U didnt Win!';
    console.log(roll);
}

rollDice()

// homework 2

let number = Number(prompt('Enter any number that you want: '));
let number1 = Number(prompt('Enter any number that you want: '));
let calulator = prompt('Enter any operation: ');

switch (calulator) {
    case '+':
        console.log(number + number1);
        break;
    case '-':
        console.log(number - number1);
        break;
    case '*':
        console.log(number * number1);
        break;
    case '/':
        console.log(number / number1);
        break;
}

// homework 3

let isStudent = false;
let age = 15;

const result = isStudent && age < 18 ? '15 ლარი' : '10 ლარი';
console.log(result);

// homework 4

let num = 15.1;
const result1 = num % 1 >= 0.5 ? Math.ceil(num) : Math.floor(num);
console.log(result1);

// homework 5

let week_of_the_day = 2;
switch (week_of_the_day) {
    case 1: case 2: case 3: case 4: case 5:
        console.log('work day');
        break;
    case 6: case 7:
        console.log('rest day')
}

// homework 6 

let num1 = 0;
const sqrt = num1 < 0 ? 'უარყოფითია' : Math.sqrt(num1);
console.log(sqrt);

// homework 7

let age1 = 18
const person = age1 > 18 && age1 < 60 ? 'free to enter' : 'get out';
console.log(person)

// homework 8

let score = 50;
let key = false;

function player() {
    const ply1 = score >= 50 && key ? 'Next level' : 'failed the level';
    console.log(ply1);
}

player();

// homework 9

function number() {
    const result = Math.min(1, 2, 3);
    console.log(result);
}

number();

// homework 10

let name = 'admin';
let password = 12345;

const user = name == 'admin' && password == 12345 ? 'Correct name and password' : 'incorrect name and password';
console.log(user);

// homework 11

let lucky_number = 2;
const lucky = Math.random() * 3 + 1;
const result2 = lucky_number === lucky ? 'jackpot!' : 'You didnt Win!';jklno ;

console.log(lucky);
