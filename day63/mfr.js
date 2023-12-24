let arr=[1,32,3,4,523,2];
// let newArr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }


//map function
let newArr = arr.map((e,index,arr) =>{
    return e**2;
})
console.log(newArr)

//Filter function
const graterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newArr.filter(graterThanSeven))

//reduce method
let arr2=[1,2,3,4,5,6]
const red =(a,b) =>{
    return a+b
}

console.log(arr2.reduce(red))

console.log(Array.from("aryan"))