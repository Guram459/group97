// homework 1

let personal = prompt('')

if(!personal) {
    console.log(false)
} else {
    console.log(true)
}

// homework 2

let age = prompt('Tell me your real age: ')

if(age === 18 && age < 18) {
    console.log('You can go now!')
} else {
    console.log('You cant Go in')
}

// homework 3

let username = 'gela'
let result = username || 'guest'

console.log(result)

// homework 4

let sum = 0
let result1 = sum || (sum/0)
console.log(result1)

// homework 5

let person = prompt('Enter number between 700 to 778')
let jackpot = 777
let result2 = person == jackpot || person 

// homework 6

let between = prompt('Enter a number between 1-100 but dont go over it: ')
let result3 = (Number.isInteger(between) && (between > 0 && between < 100)) || between

