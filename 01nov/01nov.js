console.log("this is script.js file");

//a function is a set of instructions that are executed, when we make the function call.


//below is the function body4
//this functiuon has no parameters


function displayMessage(){
    console.log("Good Evening everyone.");
}

displayMessage(); //calling the function


//function to display sum of 2 numbers

function displaySum(a,b){
    let sum = a + b;
    console.log("the sum is " + sum);
}

displaySum(4,5);



//function with return statement
function returnSum(a,b){
    let sum = a + b;
    return sum;   //return statement
}

let finalResult=returnSum(6,7);
console.log("the sum is " + finalResult);


let displayValue = displayMessage();
console.log("value stored in display variable is " + displayValue);



//******************************************************************************************************************************** */

//undefined vs null
//truthy value and falsey value



//fololwing is undefined variable example
let a;

console.log("value of the variable is " + a);


//following is null variabke example
let b=null;
console.log("value of b is " + b);



//*********************************************************************************************************************************** */




let z = 9;

if (z===9){
    console.log("we are in the if block");
}
else {
    console.log("we are in the else block");
}


//********************************************************************************************************************************** */

// == operator vs === operator
//typeof function returns the data type if the given variable
let c = '9';

console.log("data type of the variable is " + typeof(a));

if (c == 9){
    console.log(" we are in the if block");
}else{
    console.log("we are in else block");
}

if (c === 9){
    console.log(" we are in the if block");
}else{
    console.log("we are in else block");
}