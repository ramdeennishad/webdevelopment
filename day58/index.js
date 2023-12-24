// console.log("lets learn Function in JS")
// console.log("lets learn Function in Java")
// console.log("lets learn Function in c++")
// console.log("lets learn Function in C")

// function
// function nice(name) {
//     console.log(" hey "+ name +" you are nice")
//     console.log(" hey "+ name +" you are pretty")
//     console.log(" hey "+ name +" you are good")
//     console.log(" hey "+ name +" you are osm")
// }

// nice("Aryan")
// nice("NISHAD")

// sum
function add(a,b){
    // console.log(a+b)
    return a+b
}
// function add(a,b,c=5){
//     // console.log(a+b)
//     return a+b+c
// }

result=add(2,3)
result1=add(211,3)
result2=add(222,3)

console.log("the sum of these number is: " + result)
console.log("the sum of these number is: " + result1)
console.log("the sum of these number is: " + result2)

// arrow function
const func1 = (x) =>{
    console.log("I am an arrow function ", x)
}

func1(34)