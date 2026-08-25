// // Homework 1

// for( let i = 0; i < 21; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(i)
//     }
// }

// // Homework 2

// let count = 10

// while( count > 0 ) {
//     console.log(count)
//     count = count - 1
// }

// // Homework 3

// let text 

// do{
    
//     text = prompt()
//     console.log(text)
//     break

// } while( text !== "secret" ){}

// // Homework 4

// let store = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];

// for( let i of store ) {
//     console.log(i)
// }

// // Homework 5

// const car = {
//     brand: "Toyota", 
//     model: "Prius", 
//     year: 2020
// }

// for( let i in car ) {
//     console.log( i + ": " + car[i] )
// }

// // Homework 6 
 
// let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0

// for( let i of num ) {
//     sum = num[i] + sum
//     console.log(sum)
// }

// Homework 7


// // Homework 8

// const product = { 
//     milk: 3, 
//     bread: 2, 
//     cheese: 10 
// }

// let count = 0

// for( let i in product ) {
//     count = count + product[i]
// }

// console.log(count)

// // Homework 9

// let totalSum = 0

// do{
//     let user = Number(prompt("Enter any number that you want: "))

//     totalSum = totalSum + user

//     console.log(totalSum)
    

// } while( user !== 0 );

// Homework 10

let nameList = ["ლუკა", "ანი", "ალექსი", "ნინო", "ავთო"];
let newName = []

for( let i = 0; i < nameList.length; i++ ) {
    if( nameList[i].includes("ა") ) {
        newName.push(nameList[i])
        console.log(newName[i])
    }
}