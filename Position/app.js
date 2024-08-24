/*/javascript Events
function Subscribe() {
  document.getElementById('text').innerHTML = 'Subscribed';
  document.getElementById('btn').innerHTML = 'Subscribed';
  document.getElementById('btn').style.backgroundColor = '#262626';
}

function like() {
  document.getElementById('like').innerHTML =
    '<i class="fa-solid fa-thumbs-up"></i> liked';
}

function keypress() {
  document.getElementById('text').innerHTML = 'keypressed 😊';
}
keypress();

document.getElementById('btn').onclick = function () {
  document.getElementById('btn').innerHTML = 'Subscribed';
};
*/
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let imageSource = 'img/' + randomNumber + '.png';
  document.getElementById('ludo').src = imageSource;
}
//Javascript variables
/*
let userName = 'Sahabiar';
var values = 'I am';
const inTro = values.toLocaleLowerCase();
let age = 10;

let userIntro =
  values + ' ' + userName + '. ' + values + ' ' + age + ' years old';
console.log(userIntro);

// Dialog Boxes in Javascript
/ alert('Hello World'); 
const userInput = confirm('Are You Sure?');
const userInput = prompt('Hello World');
const lastFourDigits = '7586';
const MaskedaccountNumber = lastFourDigits.padStart(16, '*');
console.log(MaskedaccountNumber);
const concatenatedString = `My last Four Digits account number is `.concat(
  '',
  lastFourDigits
);
//Method and Properties of a string :

const templateString = `Four Digits account number is ${lastFourDigits.padStart(
  16,
  '*'
)}`;
console.log(templateString);

const bankBalance = 982;

const templateString2 = `I have ₹${bankBalance} in my account`;
const templateString3 = 'I have ₹' + bankBalance + ` in my account`;

// Operators in javascript
/ There are 7 types of operators:
 *Arithmetic Operator
 *Assignment operator
 *Logical Operator:  &&(And) - ||(Or) - !(Not)
 *Comparison Operator
 *conditional Operator
/

const andResult = 0 && 2;
const orResult = 0 || 2;

const andResult2 = '' && 'hello';
const orResult2 = '' || 'hello';

const andResult3 = 'hello' && null;
const orResult3 = 'hello' || null;
console.log(andResult3);

const userNam = 'Roy';
const userAge = 18;

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if (userAge >= 18) console.log('User is a working professional');

console.log('program Ended !!');
 */
// javascript Functions
// function myFunction(fullName, age, dateOfBirth = 1991) {
//   console.log(
//     'Hello ' +
//       fullName +
//       'i am ' +
//       age +
//       ' years old' +
//       ', I born in ' +
//       dateOfBirth
//   );
// }
// myFunction('sahabiar ', 24, 1998);
// myFunction('farri ', 35);
/*
function isSubscribed() {
  console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

(function (massage) {
  console.log('I am self-invokeing Function', massage);
})('hi');

let maths = function (x, y) {
  return x * y;
};
console.log(maths(3, 4));
console.log(maths(4, 4));

let add = function (x, y) {
  return x + y;
};
console.log(add(5, 6));


// Arrow function
let add = (x, y) => x + y;
console.log(add(5, 6));

//? Nested Function
function greet(firstName) {
  function sayHello() {
    alert('Hello' + firstName);
  }
  return sayHello();
}
greet(' sahabiar');


// Javascipt Objects
const newSymb = Symbol('Key1');
const mobileModel = {
  //key: value
  brand: 'I phone',
  model: 's24 Ultra',
  processor: 'Sanpdragon Gen 3',
  camera: ['200Mp', '12MP', '12MP'],
  hasZoomCamera: true,
  'selfie camera MP': 12,
  [newSymb]: 'Mykey1',
  brandModel: function () {
    return `Mobile Brand is ${this.brand} and model is ${this.model}`;
  },
};
function brandModel() {
  return `Mobile Brand is ${this.brand} and model is ${this.model}`;
}
console.log(mobileModel.brandModel());

// console.log(mobileModel.brand);
// console.log(mobileModel, ['brand']);

// console.log(Object.keys(mobileModel));
// console.log(Object.values(mobileModel));

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  p: 1,
  q: 2,
  r: 3,
};
const obj3 = {
  x: 1,
  y: 2,
  z: 3,
};
const mainObj = { obj1, obj2, obj3 };
console.log(mainObj);
*/
