// Primitive Datatypes...
// 7 types ke hai.. ->>> Ye call by value hote hai...

// String , Number , Boolean , null , Undefined , Symbol , BigInt 

// JAVASCRIPT  dynamically typed hai ya statically hai ??? ->>    JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null; // null ka datatype -> object
let userEmail; //undefined value hai abhi iski

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId); // Ouput -> false

const bigNumber = 42341425434324312345255555n;
console.log(typeof bigNumber); // Output - bigint


// Reference Type or Non - Primitive type

// Arrays , Objects , Functions , ---->>>>> INN sabhi ka dataype function hi bola jaata hai lekin function ka -> objectfunction bolte hai......

//Array...
const heros = ["shaktimaan" , "naagraj" , "spiderdev"]

//Object...
let myObj = {
    name:"Lokesh",
    id: 22,
}

//Function...
// function(){
//     // This is the definition of function...
// }
// Ab apan chahte hai ki iss function ko variable mei store karlete hai....
const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof myFunction);

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);




// Primitive datatypes:

// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

  
    // Non-primitive datatypes:

// Array - object
// Function - function(object)
// Object - object