// Homework 1

const list = ["პაციენტი 1", "პაციენტი 2"];

list.unshift( "კრიტიკული პაციენტი");
list.shift();

console.log(list);

// Homework 2

const classA = ["ანი", "გიორგი"];
const classB = ["ლუკა", "ნინო"];
const allstudent = classA.concat(classB);

console.log(allstudent);

// Homework 3

const nums = [[1, 2], [3, 4]]; 
const allnums = nums.flat();

console.log(allnums);

// Homework 4

const proglangeages = ["javascript", "programming", "web"];
const language = proglangeages.join("-");

console.log(language);

// Homework 5

const names = ["ნიკა", "ლაშა", "სანდრო", "გიორგი", "დათო"];
const slicehalf = names.slice(2);

console.log(slicehalf);

// Homework 6

const anotherlistofnames = ["ანი", "ლუკა", "საბა"];

if( anotherlistofnames.includes("ლუკა") ) {
    console.log("მოგესალმებით!");
}

// Homework 7

const store =  ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];

const newstore = store.indexOf("ატამი");

console.log(newstore);

// Homework 8

const ABC = ["A", "B", "C", "A", "D"];

const newABC = ABC.lastIndexOf("A");

console.log(newABC);

// Homework 9

let count = ["პირველი", "მეორე", "მეოთხე"];

let slicenum = count.slice(0, 2);

let Addnum = ["მესამე"];

let result = slicenum.concat(Addnum)

console.log(result)

// Homework 10

let Newlist = [["აგენტი 001"], ["აგენტი 007"], ["აგენტი 005"]];
let flatlist = Newlist.flat()
let includelist = flatlist.includes("აგენტი 007")

if (includelist) {
    console.log(flatlist.indexOf("აგენტი 007"))
}

// let indexoflist = includelist.indexOf(1)

