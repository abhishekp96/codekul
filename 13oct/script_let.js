console.log("script file is here");

//var , let , const

//variables declared using let keyword inside the block ; cannot be accesed outside the block.
//Such variables have block scope.

let c = 111;

{
  let a = 9;
  console.log(a);
  console.log(c);
}

let b = 78;
console.log(b);

b = 9;
console.log(b);


