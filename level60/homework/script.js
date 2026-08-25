// // Homework 1

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddnumbers = (odd) => {
//     for(let i = 0; i < odd.length; i++) {
//         if(odd[i] % 2 === 0) {
//             console.log(odd[i]);
//         }
//     }
// }

// oddnumbers(numbers);

// Homework 2

//             0  1  2  3  4  5  6  7  8
// let list = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// let number = [1,3,2,5,15,16,3];
// let first = number[0];

// for(let i = 0; i < number.length; i++){
//     if( number[i] > first ){
//         first = number[i];
//     }
// }

// console.log(first);


// Homework 3

// let number = [1, 2, 3, 5, 2, 5, 3, 5, 5, 5 ]
// let count = 0;

// const searchnum = (num) => {
//     for( let i = 0;  i < num.length; i++ ) {
//         if( num[i] === 5 ) {
//             count = count + 1;
//         }
//     }
//     console.log(count);
// }

// searchnum(number);

// Homework 4

// let variable = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let emptyvar = [];

// for( let i = 0; i < variable.length; i++ ) {
//     let eme = emptyvar.push(variable[i]);
// }

// console.log(emptyvar.reverse());

// Homework 5 

// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let counts = [];

// const mass = num => {
//     for( let i = 0; i < num.length; i++ ) {
//         counts.push(numbers[i] * 2);
//     }
//     console.log(counts);
// }

// mass(numbers)

// Homework 6

// let mixnums = [-3, 5, 0, -1, 12, -8, 4];
// let positiveCounts = [];
// let negativeCounts = [];

// for( let i = 0; i < mixnums.length; i++ ) {
//     if( mixnums[i] > 0 ) {
//         positiveCounts.push(mixnums[i])
//     } else if( mixnums[i] < 0 ) {
//         negativeCounts.push(mixnums[i])
//     }
// }

// console.log(positiveCounts)
// console.log(negativeCounts)

// Homework 7 

// let store = ["ვაშლი", "მსხალი", "ატამი", "ქლიავი"];

// const market = fruits => {
//     for( let i = 0; i < fruits.length; i++ ) {
//         if( fruits[i] ===  "ატამი" ) {
//             console.log(i)
//         }
//     }
// }

// market(store)

// homework 8

// let arr1 = [1, 2, 3];
// let arr2 = []

// for( let i = 0; i < arr1.length; i++ ) {
//     arr2.push(arr1[i] + i)
// }

// console.log(arr2)

// Homework 9

// let num = [ 1, 2, 3, 4, 5 ]
// let sum = 0

// for( let i = 0; i < num.length; i++ ) {
//     sum = sum + num[i]
// }; 

// let middle = sum / num.length

// for( let i = 0; i < num.length; i++ ) {
//     if(middle[i] > middle) {
//         console.log(num[i])
//     }
// }

// Homework 10

// let languages = ["it", "javascript", "code", "programming"];

// const lang = world => {
//     if( world.length < 5) {
//         console.log( "მოკლე ტექსტი" )
//     } else if( world.length > 5 ) {
//         console.log( "გრძელი ტექსტი" )
//     }
// }

// lang(languages)