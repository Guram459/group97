// Homework 1

let number = Math.random() * 10

console.log(number)

// Homework 2

let num = Math.floor(Math.random() * 10)

console.log(num)

// Homework 3

let num1 = Math.ceil(4.1)

console.log(num1)

// Homework 4

function rounded(decimal){
    let fraction = decimal - Math.floor(decimal)

    if(fraction >= 0.5){
        console.log('Top')
    } else {
        console.log('Down')
    }
}

rounded(2.4)
rounded(2.5)

// Homework 5

let balance = 0

function bankbalance(balance) {
    if (balance > 0){
        return 1;
    } else if (balance < 0){
        return -1
    } else {
        return 0;
    }
}

console.log(bankbalance())