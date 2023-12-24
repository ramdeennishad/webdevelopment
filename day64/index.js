// Exercisee 10 solution business name generator
// Exercise-Business Name Generator
// Write a program that generates business names using the following rules:
// by combining list of adjective and shop names and another word
//adjective:
// crazy
// amazing 
// Fire

// shop name:
// Engine
// foods
// Garments

// Another word:
// Bros
// Limited
// Hub

let rand = Math.random()
console.log(rand)
let first, second, third
//lets generate the frst word
if(rand<0.33){
    first="crazy"
    // 0 0.33 0.66 1
}else if(rand< 0.66 && rand<=0.33){
    first='amazing'
}else{
    first="fire"
}

rand = Math.random()
console.log(rand)
//lets generate the second word
if(rand<0.33){
    second="Engine"
    // 0 0.33 0.66 1
}else if(rand< 0.66 && rand<=0.33){
    second='foods'
}else{
    second="Garments"
}


rand = Math.random()
console.log(rand)
//lets generate the third word
if(rand<0.33){
    third="Bros"
    // 0 0.33 0.66 1
}else if(rand< 0.66 && rand<=0.33){
    third='Limited'
}else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)