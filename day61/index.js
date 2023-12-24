/* create a faulty calculator using javascript

this faulty calculator does following :
1. it takes two input as input from user
2. it performs wrong operation as follow:


+ ----> -
* ---> +
- ----> /
/ ---> **

it performs wrong operation 10% of the time

*/
let random=Math.random();
console.log(random)
let a= prompt("Enter first number:")
let c= prompt("Enter operation:")
let b= prompt("Enter second number:")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    // perform correct calculation
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}