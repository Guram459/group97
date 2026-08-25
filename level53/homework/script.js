// homework 1

let isAdmin = false;
const result = isAdmin ? 'ყველა უფლება' : 'შეზღუდული უფლებ';
console.log(result);

// homework 2

let num = 20;
const result1 = num % 2 === 0 ? 'Number is odd' : 'Number is Even';
console.log(result1);

// homework 3

let prize = 30;
let product = prize >= 50 ? 'მიწოდება უფასოა (0 ლარი)' : 'შემთხვევაში ღირს 5 ლარი';
console.log(product);

// homework 4

let isDarkMode = true;
const mode = isDarkMode ? 'Black' : 'White';
console.log(mode);

// homework 5

let storestock = 100;
const shop = storestock > 0 ? 'ხელმისაწვდომია' : 'ამოიწურა';
console.log(shop)

// homework 6

let temp = 0;
const heat = temp > 30 ? 'ცხელა' : temp > 15 && temp < 30 ? 'თბილა' : 'ცივა'
console.log(heat)

// homework 7

let password = "123456789"
const phone = password.length < 8 ? 'საშუალო' : 'ძლიერი'
console.log(phone)

// homework 8

let promo = 'SAVE10'
const code = promo == 'SAVE10' ? 'დააკლდეს 10 ლარი.' : promo == 'SAVE20' ? 'დააკლდეს 20 ლარი' : '0'
console.log(code)

// homework 9 

let age = 10
const human = age < 12 ? 'ბავშვი' : age > 12 && age < 18 ? 'მოზარდი' : 'ზრდასრული'
console.log(human)

// homework 10

let isVIP = 'VIP'
let total = 300
let person = isVIP == 'VIP' ? 'ფასდაკლებაა 30%' : total > 200 ? 'ფასდაკლებაა 15%' : 'ფასდაკლებაა 0%'
console.log(person)