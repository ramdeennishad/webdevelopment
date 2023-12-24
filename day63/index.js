let arr = [1,2,3,4,5,6,7]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
// array are mutable
arr[0]=99
console.log(arr)
// let a="aryan"
// a[0]='k'
// console.log(a)

console.log(typeof(arr))

console.log(arr.toString())

console.log(arr.join("and"))

console.log(arr.pop())

console.log(arr.push(100))
console.log(arr)

console.log(arr.shift())

arr.unshift("aryan")
console.log(arr)

delete(arr[6])
console.log(arr[6])

let a1=[1,2,3]
let a2=[4,5]
let a3=[6]

console.log(a1.concat(a2,a3))

console.log(arr.sort())

console.log(a1.splice(1,2))
console.log(a1.splice(1,2,33,44))
console.log(a1)

let a=[1,22,13,41,5]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index,arr)=>{
//     console.log(value ,index,arr)
// })

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
        
//     }
// }

for (const iterator of a) {
    console.log(iterator)
    
}


// Map ()
