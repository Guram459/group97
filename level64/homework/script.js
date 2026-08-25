// // Homework 1

// let names = ['ანი', 'ლუკა', 'ნინო'];

// names.forEach( ( name, index ) => {
//     console.log(`hello`, name);
// });

// // Homework 2

// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// numbers.forEach(( item, index ) => {
//     if( item % 2 === 0 ) {
//         console.log( index, `რიცხვი არის ლუწი` );
//     }
// });

// // Homework 3

// let nums = [-5, 10, -2, 8, 0, -1];
// const positiveNumbers = [];

// nums.forEach(( item, index ) => {
//     if( item > 0 ) {
//         positiveNumbers.push(item)
//     }
// });

// console.log(positiveNumbers)

// // Homework 4

// let films = ['Inception', 'Interstellar', 'The Matrix']; 

// films.forEach( (items, index ) => {
//     console.log(index, items)
// })

// // Homework 5

// let fruits = ['ვაშლი', 'მსხალი', 'ატამი'];

// fruits.forEach( ( items, index ) => {
//     for( i = 0; i < items.length; i++ ) {
//         console.log(items)
//     }
// })

// // Homework 6

// const userNames = ['გიორგი', 'მარიამი'];
// const userAges = [ 16, 17 ];

// userNames.forEach( ( items, index ) => {
//     console.log(items, `is`, userAges[index], `years old`)
// });

// // Homework 7

// let product = [ 19.99, 9.99, 199, 599 ];
// const new_prizes = []

// product.forEach( ( items, index ) => {
//     new_prizes.push(items * 0.8)
// });

// console.log(new_prizes)

// // homework 8

// let students_score = [ 80, 40, 49, 50, 99, 59 ]
// const passedScores = []

// students_score.forEach( ( items, index ) => {
//     if( items >= 51 ) {
//         passedScores.push(items)
//     }
// })

// console.log(passedScores)

// // Homework 9

// let menu = ['პიცა მარგარიტა', 'ცეზარი სალათი', 'პიცა პეპერონი', 'ბერძნული სალათი'];
// const pizza = [];

// menu.forEach( ( items, index ) => {
//     if( items.includes('პიცა') ) {
//           pizza.push(items);
//     }
// });

// console.log(pizza);

// Homework 10 

let biggestNum = [ 20, 500, 1, 501, 499 ];

biggestNum.forEach( ( items, index) => {
    console.log(Math.max(...biggestNum))
})