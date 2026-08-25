// homework 1

let result = prompt('Enter a Number between 1 and 5: ')
let random = Math.floor(Math.random() * 5 + 1)

if(result === random) {
    console.log('გამოიცანი!')
} else {
    console.log('ვერ გამოიცანი')
}

// homework 2

let personal = prompt('pick your ticket place: ')
let celic = Math.ceil(personal / 5)

if(personal < 0) {
    console.log('არასწორი ადგილი')
} else { 
    console.log(celic)
}

// homework 3

let product = prompt('started prize of the product: ')
let rounded = product / 15
let round = Math.round(rounded)

if(product > 50) {
    console.log('ძვირია')
} else {
    console.log('მისაღები ფასია')
}

// homework 4

let balance = prompt('Enter your bank balance: ')
let signa = Math.sign(balance)

if(signa === 1) {
    console.log('თქვენ გაქვთ დავალიანება')
} else if (signa === -1) {
    console.log('თქვენი ბალანსი ნულია')
} else if (signa === 0) {
    console.log('თქვენს ანგარიშზე არის თანხა')
}

// homework 5

let squer = prompt('Enter side squere length: ')
let pow = Math.pow(squer , 4)

if(squer > 100) {
    console.log('დიდი ფართობი')
} else {
    console.log('პატარა ფართობი')
}

// homework 6

let player = prompt('Enter a number for the character: ')
let player2 = prompt('Now Enter a Number for your character: ')
let max = Math.max(player, player2)

if(max < 50) {
    console.log('ორივე მებრძოლი სუსტია')
} else {
    console.log(max)
}

// homework 7

let market1 = prompt('Enter a prize for the product in first market: ')
let market2 = prompt('Enter a prize for the product in second market: ')
let market3 = prompt('Enter a prize for the product in third market: ')
let min = Math.min(market1, market2, market3)

if(min < 10) {
    console.log('ძალიან იაფია!')
} else {
    console.log(min)
}

// homework 8

let triangle = prompt('Enter a number: ')
let triangle1 = prompt('Enter a number: ')
let result1 = triangle + triangle1
let sqrt = Math.sqrt(result1)

if(sqrt > 10) {
    console.log('გრძელი სამკუთხედი')
} else {
    console.log('მოკლე სამკუთხედი')
}

// homework 9 

let float = Number.isInteger(Number(prompt('Enter any number that u like: ')))

if(float) {
    console.log('თქვენ შეიყვანეთ მთელი რიცხვი')
} else {
    console.log('თქვენ შეიყვანეთ ათწილადი რიცხვი')
}

// homework 10

let personal1 = prompt('Enter a Number between 1 and 6: ')
let roll = Math.floor(Math.random() * 6 + 1)

if(Number.isInteger(personal1)) {
    if(personal1 === roll){
        console.log('Your the Winner!')
    } else {
        console.log('Your the loser!')
    }
} else {
    console.log('incorrect!')
}

