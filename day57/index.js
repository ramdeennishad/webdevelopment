console.log("lets learn the looping concept in JS")

let a=1;

//for loop
// for (let i = 0; i < 30; i++) {
    
//     console.log(a+i);
// }

//for in loop

let obj={
    name:"aryan",
    role:"programming",
    company:"no company"
}

for (const key in obj) {
   
        const element = obj[key];
        console.log(key,element)
    }

//for of loop

// for (const c of "aryan") {
//     console.log(c)
// }

// while loop
let i=0;
// while (i<6) {
//     console.log(i)
//     i++;
// }

// do while
do {
    console.log(i)
    i++;
} while (i<6);