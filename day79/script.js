let a=prompt("enter a number")
let b=prompt("enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b) 

function main(){
    let x=3
    try {
        console.log("the sum is ", sum*x)
        return true 
    } catch (error) {
        console.log(" Eroor aa gya bhai")
        return false
    }
    finally{
        console.log("files are being closed and db connetion is being closed")
    }
}

let c= main()



