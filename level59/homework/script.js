// Homework 1

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

let newnums = [];

const arrow = (sum) => {

    let newnums = [];

    for( let i = 0; i < sum.length; i++ ) {
        if(numbers[i] % 2 === 0) {
            newnums.push(numbers[i]);
        }
        
    }
    console.log(newnums);
}

arrow(numbers);

// Homework 2

let listofnames = ["ანი", "ლუკა", "ნიკო"];

const names = (users) => {
    if ( users.includes("ანი") ) {
        console.log("სტუდენტი ნაპოვნია");
    } else {
        console.log("სტუდენტი არ არის სიაში");
    }
}

names(listofnames);

// Homework 3

let allnums = [10, -5, 20, -3, 30, -12];

const listofnums = (num) => {

    let allnegativenums = [];

    for(let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            allnegativenums.push(allnums[i]);
        }
    }
    console.log(allnegativenums);
}

listofnums(allnums);

// Homework 4

let fruits = [ 19, 15, 5, 22 ];

const store = (prizes) => {

    let total = 0;

    for ( let i = 0; i < prizes.length; i++ ) {
        if ( prizes.length > 0) {
            total = total + prizes[i];
        } else if ( prizes <= 0 ) {
            console.log("You have nothing in the cart");
        }
    }
    console.log(total);
}

store(fruits);

// Homework 5

let student = ["მე", "ვსწავლობ", "javascript-ს"];

const learn = (study) => {

    let text = study.join(" ");

    if ( study.length > 10 ) {
        console.log(text);
    } else {
        console.log("NaN");
    }

}

learn(student);

// Homework 6

let cities = ["ბათუმი", "თბილისი", "ქუთაისი"];

let findthecity = city => {
    if ( city.includes("თბილისი") ) {
        console.log("this city is one the list");
    } else {
        console.log("this city is not in the list");
    }
}

findthecity(cities);

// Homework 7

let listA = [1, 2, 3 ];

let listB = [4, 5, 6, 7, 8, 9, 10, 11];

const AB = (lstA, lstB) => {
    if ( lstA.length < lstB.length ) {
        console.log(listA.concat(listB));
    } else {
        console.log(listB.concat(listB));
    }
}

AB(listA, listB);

// Homework 8

let IknowmyABC =  ["A", "B", "C", "D", "E"];

const ABC = alphabet => {
    for ( let i = 0; i < 4; i++ ) {
        console.log(alphabet.pop());
    }
}

ABC(IknowmyABC);

// Homework 9

let numero = [8, 16, 15, 39, 40];

const numeros = onetwothree => {

    let result = []

    for ( let i = 0; i < onetwothree.length; i++ ) {
        if ( onetwothree[i] > 15 && onetwothree[i] < 40 ) {
            result.push(onetwothree.unshift())
        }
    }
    console.log(result)
}

numeros(numero);

function sumTwoSmallestNumbers(numbers) {  
    let result = []
    
    for( let i = 0; i < numbers.length; i++ ) {
        if( numbers > 9 ) {
            result.push(numbers)
        }
    }
 }
 
