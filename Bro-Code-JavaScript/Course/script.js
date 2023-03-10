
// A variable is a container for stroing data
// A variable behaves as if it was the value that is containes

// Two steps:
// 1.Declaration (var, let, const)
// 2.Assigment (= assigment operator)

let name = `Ilija`; // string
let age = 21; // number
let student = true; // boolean

console.log(`Hello`, name);
console.log(`You are`, age, `years old`);
console.log(`Enrolled:`, student);

document.getElementById(`p1`).innerHTML = `Hello ` + name;
document.getElementById(`p2`).innerHTML = `You are ` + age + ` years old`;
document.getElementById(`p3`).innerHTML = `Enrolled: ` + student;

///////////////////////////////////////////////////////////////////////////

/*
    arithmetic expression is a combination of...
    operands (values, variables, ect.)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
let  extraStudents = students % 3; // you can find if the number is
                                   // evan or odd - students % 2

console.log(students);
console.log(extraStudents);

/*
    operator precendence
    1.parenthesis ()
    2.exponents
    3.multiplication & division
    4.addition and substraction
*/

let result = (1 + 2) * (3 + 4);
console.log(result);

//////////////////////////////////////////////////////////////////////////

// How to accept user input

// Easy way with a window prompt

//let username = window.prompt(`What is your name?`);
//console.log(username);

// Hard way with HTML textbox

let username;
document.getElementById(`myButton`).onclick = function(){

  username = document.getElementById(`myText`).value;
  console.log(username);
  document.getElementById(`myLabel`).innerHTML = username;
};

////////////////////////////////////////////////////////////////////////////

// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

//let inputAge = window.prompt(`How old are you?`);
//console.log(typeof inputAge);
//inputAge = Number(inputAge);
//console.log(typeof inputAge);
//inputAge += 1;
//console.log(`Happy birthday! You are`, inputAge, `years old`);

/*
let x;
let y;
let z;

x = Number(`3.14`);
y = String(3.14);
z = Boolean(``);

console.log(x, typeof x);
console.log(x, typeof y);
console.log(z, typeof z);
*/

///////////////////////////////////////////////////////////////////

// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

circumference = 2 * PI * radius;
//console.log(`The circumference is:`, circumference);

////////////////////////////////////////////////////////////////////

// Math

//let a = 3.14;
//let b = 5;
//let c = 9;
//let maximum;
//let mininmum;

//a = Math.round(a); // round - 3
//a = Math.floor(a); // round number down - 3.99 will be 3
//a = Math.ceil(a); // round up - 4
//a = Math.pow(a, 2); 
//a = Math.sqrt(a); 
//a = Math.abs(a);
//maximum = Math.max(a, b, c);
//maximum = Math.min(a, b, c);
//console.log(maximum);

//console.log(a);

/////////////////////////////////////////////////////////////////////////

// Hypotenuse Calc Practise

let a;
let b;
let c;

/*
a = window.prompt(`Enter side A:`);
a = Number(a);

b = window.prompt(`Enter side B:`);
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(`Side c is:`, c);
*/

document.getElementById(`submitButton`).onclick = function(){

a = document.getElementById(`aTextBox`).value;
a = Number(a);

b = document.getElementById(`bTextBox`).value;
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById(`cLabel`).innerHTML = `Side C: ` + c;
};

////////////////////////////////////////////////////////////////////////

// Counter Programm Practise

let count = 0;

document.getElementById(`decrease`).onclick = function(){
  count -= 1;
  document.getElementById(`counterLabel`).innerHTML = count;
}

document.getElementById(`reset`).onclick = function(){
  count = 0;
  document.getElementById(`counterLabel`).innerHTML = count;
}

document.getElementById(`increase`).onclick = function(){
  count += 1;
  document.getElementById(`counterLabel`).innerHTML = count;
};

/////////////////////////////////////////////////////////////////////////

// Random Number Generator Practise

let x; // generates number from 1 to 6
let y;
let z;

document.getElementById(`rollButton`).onclick = function(){

  x = Math.floor(Math.random() * 6) + 1; 
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById(`xLabel`).innerHTML = x;
  document.getElementById(`yLabel`).innerHTML = y;
  document.getElementById(`zLabel`).innerHTML = z;
};

///////////////////////////////////////////////////////////////////////////

// useful string properties & methods

let userName = `Ilija`;
let phoneNumber = `123-456-7890`;

console.log(userName.length); // how many caracters are in a string
console.log(userName.charAt(0)); // first index of the string 
console.log(userName.indexOf(`j`));
console.log(userName.trim()); // get rid of empty space
console.log(phoneNumber.replaceAll(`-`, `/`));

//////////////////////////////////////////////////////////////////////////

// slice() extracts a section of a string
//         and returns it as a new string,
//         without modifying the original string

let fullName = `Ilija Trajkovski`;
let firstName;
let lastName;

//firstName = fullName.slice(0, 5);
//lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(` `));
lastName = fullName.slice(fullName.indexOf(` `) + 1);

console.log(lastName);
console.log(firstName);

//////////////////////////////////////////////////////////////////////////

// method chaining = calling one method after another
//                   is one continuous line of code

let myName = `ilija`;

let letter = myName.charAt(0).toUpperCase();

console.log(letter);

////////////////////////////////////////////////////////////////////////

// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!

let newAge = 16;

if (newAge >= 18) {
  console.log(`You are an adult`);
}
else {
  console.log(`Yuo are a child.`);
};

////////////////////////////////////////////////////////////////////////

// checked property

document.getElementById(`myNewButton`).onclick = function(){

  const myCheckBox = document.getElementById(`myCheckbox`);
  const visaBtn = document.getElementById(`visaBtn`);
  const masterBtn = document.getElementById(`masterBtn`);
  const paypalBtn = document.getElementById(`paypalBtn`);

  if (myCheckBox.checked) {
    console.log(`You are subscribed!`);
  } else {
    console.log(`You are not subcribed!`);
  }

  if (visaBtn.checked) {
    console.log(`You are paying with a Visa!`);
  } else if (masterBtn.checked) {
    console.log(`You are paying with a Mastercard! `);
  } else if (paypalBtn.checked) {
    console.log(`You are paying with a Paypal!`);
  } else {
    console.log(`You must select a payment type!`)
  }
};

/////////////////////////////////////////////////////////////////////////

// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient that many `else if` statemnts

let grade = 61;

switch (true) {
    case grade >= 90:
    console.log(`You did great!`);
    break;
    case grade >= 80:
    console.log(`You did good!`);
    break;
    case grade >= 70:
    console.log(`You did okey!`);
    break;
    case grade >= 60:
    console.log(`You passed...barely!`);
    break;
    case grade > 60:
    console.log(`You failed!`);
    break;

  default:
    console.log(grade, `is not a letter grade`);
};

///////////////////////////////////////////////////////////////////////////

// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions muste be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = true;

if (temp > 0 && temp < 30 && sunny) {
  console.log(`The weather is good`);
} else {
  console.log(`The weather is bad`);
}

///////////////////////////////////////////////////////////////////////////

// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temperature = 15;

if (!temperature > 0) {
  console.log(`It's warm outside!`);
} else {
  console.log(`It's cold outside!`);
}

///////////////////////////////////////////////////////////////////

// while loop = repeat some code
//              while some condition is true
//              potentially infinite

/*
let userNameInput = ``;

while (userNameInput === `` || userNameInput === null) {
  userNameInput = window.prompt(`Enter your name`)
}
console.log(`hello`, userNameInput);
*/

////////////////////////////////////////////////////////////////////

// do while loop = do something,
//                 then check the condition,
//                 repat if condition is true
/*
let userNameInput;

do {
  userNameInput = window.prompt(`Enter your name`);
} while (userNameInput === ``);
 
console.log(`hello`, userNameInput);
*/
/////////////////////////////////////////////////////////////////////

// for loop = repeat some code a certain amount of times

for (let i = 10; i > 0; i -= 1) {
  
  console.log(i);
}

////////////////////////////////////////////////////////////////////

// break = breaks out of a loop entirely
// continue = skip an interaction of a loop

for (let i = 1; i <= 20; i+= 1) {
  if (i === 13) {
    // break; break by 12 - will break out of a loop entirely
    continue; // skip the number 13 - only that interaction
  }
  console.log(i);  
}

/////////////////////////////////////////////////////////////////////

// nested loop = a loop inside of another loop
/*
let symbol = window.prompt(`Enter a symbol to use`);
let rows = window.prompt(`Enter # of rows`);
let colums = window.prompt(`Enter # of colums`);

for (let i = 1; i <= rows; i+=1) {
  for (let j = 1; j <= colums; j+=1) {
    document.getElementById(`myRectiangle`).innerHTML += symbol;
     }
     document.getElementById(`myRectiangle`).innerHTML += '<br>';
}
*/
///////////////////////////////////////////////////////////////////////

// function = Define code once, and use it many times.
//            To preform some code, call the function name.

startProgramm();

function startProgramm() {
let name1 = `Ilija`; 
let age1 = 36;     

happyBirthday(name1, age1);
}



function happyBirthday(param1, param2) {
  
  console.log(`Happy birthday to you`, param1);
  console.log(`You are`, param2, `years old!`);
};

////////////////////////////////////////////////////////////////////////

// return = returns a value back to the place where you invoked a function

let area;
let width;
let height;

width = window.prompt(`Enter width:`);
height = window.prompt(`Enter height:`);

area = getArea(width, height);
console.log(`The area is:`, area);

function getArea(width, height) {
  let result = width * height;
  return result;
}

///////////////////////////////////////////////////////////////////////

/* ternary operator = Shortcut for an `if/else statement`
                    Takes 3 operands

                    1. a condition with?
                    2. expression if True:
                    3. Expression if False

   condition? expIfTrue : expIfFalse
*/

checkWinner(false)

function checkWinner(win) {
  
  win ? console.log(`win`) : console.log(`lose`);;

}

////////////////////////////////////////////////////////////////////////

// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function() {}

// global variable = is declaired outside any function
// (if global, var will change browser's window properties)

//////////////////////////////////////////////////////////////////////

// Template literals = demilited with (`)
//                   instead of double or single quotes
//                   allows embedded variables and expressions

let userIn = `Ilija`;
let items = 3;
let total = 75;

let text = 
`Hello ${userIn}<br>
You have ${items} items in your cart<br>
Your total is $ ${total}`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;

////////////////////////////////////////////////////////////////////////

// do 1.57 saat