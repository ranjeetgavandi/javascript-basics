let name = 'Ranjeet'; // String literal
let intrestRate = 0.3;
intrestRate = 1;
let number = 7; // Number literal
let isApproved = true; //boolean literal
let firstName;
let lastName = null;

// object

let person = {
        name: 'Ranjeet',
        age: '33'
    }
    // dot notation
person.name = 'Reyansh',
    // Bracket Notation
    person['name'] = 'Shree'
    //console.log(person.name);---------------

// Array

let selectColor = ['red', 'orange'];
selectColor[2] = 1;
//console.log(selectColor.length);----------------

// function
//performing a task
function myName(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
myName('Ranjeet', 'Gavandi');

//calculating a vale
function addNumber(number) {
    return number * number;
}

//let valeNumber = addNumber(3)
//console.log(addNumber(2))--------------

let x = 3;
let y = 9;
//console.log(y += 5, x - +6);-----------

//Ternary Operator
let number1 = 70;

let type = number1 > 80 ? 'gold' : 'sliver';
//console.log(type);----------------

//Logical Operator
//logical AND( && )
//console.log(true && true);

//logical OR( || )
//Retrun True if one of the operands is true
let hightIncome = false;
let goodCreditScore = false;

let eligibleForLoan = hightIncome && goodCreditScore;
//console.log("good", eligibleForLoan);--------------
// Logical Not (!)
let applicationRefused = !eligibleForLoan;
//console.log("not good", applicationRefused);----------

// logical operator with non booleans
//falsy (false)
// undefined , null, 0 , false, '', NaN falsy value in javascript
//console.log(false || 1000)---------------
// Anythig that is not falsy  ->  Truthy

//console.log(false || 2000 || 1);----------

let userC = 'red';
let defulteC = "blue"
let currentColor = userC || defulteC;
//console.log(currentColor);----------


let a = "green";
let b = "black";

//console.log(a);----------
//console.log(b);--------------
let c = a;
a = b;
b = c;
//console.log(a);-------------
//console.log(b);------------

let hour = 21;
//If Else-------------
// if (hour >= 6 && hour < 12) {
//     console.log("Good moring world");
// } else if (hour >= 12 && hour < 18) {
//     console.log("Good afternoon!");
// } else if (hour >= 18 && hour < 20) {
//     console.log("Good evening!");
// } else {
//     console.log("Good night")
// }

//switch  case----------------
// let role = "admin";

// switch (role) {
//     case 'Guset':
//         console.log("Guset User");
//         break;
//     case 'admin':
//         console.log("admin User");

//         break;
//     default:
//         console.log("Unknow User");
// }
// role = "Guset";
// if (role === "Guset") console.log("Guest User");
// else if (role === "admin") console.log("admin user");
// else console.log("Unknow User");

//Loops For, While, Do while, For... in, For...of--------------
for (let b = 5; b >= 1; b--) {
    if (b % 2 !== 0) console.log(b);
}
//While----------------------

// b = 0;
// while (b <= 5) {
//     if (b % 2 !== 0) console.log(b);
//     b++
// }
//Do while-----------------
// b = 9;
// do {
//     if (b % 2 !== 0) console.log(b);
//     b++
// } while (b <= 6);

//For in------------------

// const person1 = {
//     name: "Ravi",
//     age: 25
// };
// for (let key in person1) {
//     console.log(key, person1[key]);
// }

//for of
// const colors = ['red', 'yellow', 'green'];
// for (let color of colors) {
//     console.log(color);
// }
// let abc = max(4, 3);
// console.log(abc);

// function max(a, b) {
//     // if (a > b) return a;
//     //  return b;
//     return (a < b) ? a : b;
// }

// console.log(isLandscape(900, 800));

// function isLandscape(width, height) {
//     return (width > height);
// }

// Divisible by 3 => fizz;
//Divisible by 5 => Buzz;
//Divisible by 3 and 5 => fizzBuzz;
//Divisible by 3 or 5 => input;
//not a number  => 'not a number';

let output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    if (input % 3 === 0 && input % 5 === 0)
        return 'fizzBuzz';
    if (input % 3 === 0)
        return 'fizz';
    if (input % 5 === 0)
        return 'Buzz';

    return input;
};


// speed limit = 70
// 5 -> 1 point 
//Math.floor(1.3)
//12 points -> Suspended 
checkSeed(119);


function checkSeed(speed) {
    const speedLimt = 70;
    const kmPerPoint = 5;
    if (speed < speedLimt + kmPerPoint) {
        console.log('ok');
    } else {
        const points = Math.floor((speed - speedLimt) / kmPerPoint);

        if (points >= 12) {
            console.log('suspended License')
        } else {
            console.log('points', points)
        }
    }
};

//Even and  ODD number

shwoNumber(10);

function shwoNumber(limit) {
    for (let i = 0; i <= limit; i++) {
        // if (i % 2 === 0) console.log(i, 'Even')
        // else {
        //     console.log(i, "odd");
        // }
        const message = (i % 2 === 0) ? "Even" : "odd";
        console.log(i, message);
    }
}

// Truthy value 
const array = ["", null, NaN, 1, 5]
console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

// String propratis--
const movie = {
    title: 'a',
    releseYear: 2020,
    reting: 4.5,
    director: 'b'
}

showPropratis(movie);

function showPropratis(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

//Sum of multiples 3 and 6

console.log(sum(10));
//multiples of 3:3 ,6,9
//multiples of 5:5,10

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;

}

// Gread 

const marks = [80, 90, 50];

console.log(calculateGread(marks));

function calculateGread(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
        let average = sum / marks.length;

        if (average > 60) return "F";
        if (average > 70) return "D";
        if (average > 80) return "C";
        if (average > 90) return "B";
        return "A";
    }
}

// Stars

showStars(3);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let star = '';
        for (let i = 0; i < row; i++)
            star += "*";

        console.log(star);
    }
}