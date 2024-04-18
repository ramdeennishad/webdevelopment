const { error } = require("console");
const fs = require("fs")

//const fs= require("fs/promises")

//console.log(fs);

console.log('Starting');


//fs.writeFileSync("aryan.txt", "Aryan is not a good boy")

fs.writeFile("ary1.txt", "aryan is a good boy", ()=>{
    console.log('done');

    fs.readFile("ary1.txt", (error, data)=>{
        console.log(error, data.toString());
        
    })
    
})

console.log('ending');


fs.appendFile("aryan.txt", "Nishad", (e,d)=>{
    console.log(d);
    
})

