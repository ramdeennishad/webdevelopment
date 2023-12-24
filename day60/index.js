console.log(" Lets Learn String in JS")
let a="aryan"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

//Length of the string
console.log(a.length)

//tempalate literal
let name="aryan"
let friend="no friend"
console.log("His name is " + name + " and his friend is " + friend )

console.log(` his name is ${name} and his friend is ${friend}`)

//Escape sequence character
console.log("\t - Tab \n - Newline \r - Carriage Return ")

let b="gdgdjdhsjdh"

console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

//Slicing
console.log(b.slice(1,4))
console.log(b.slice(1))

//replace
console.log(b.replace('gdg','aaa'))

//concate
let c="ram"
let d="jayshiya"
console.log(d.concat(c, "nishad"))

// string are immutable

console.log(a)

console.log(c.charAt(0))
console.log(c.indexOf("r"))

console.log(c.startsWith('r'))


