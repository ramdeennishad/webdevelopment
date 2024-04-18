fs.writeFile("ary1.txt", "aryan is a good boy", ()=>{
    console.log('done');

    fs.readFile("ary1.txt", (error, data)=>{
        console.log(error, data.toString());
        // again
        fs.writeFile("ary1.txt", "aryan is a good boy", ()=>{
            console.log('done');
        
            fs.readFile("ary1.txt", (error, data)=>{
                console.log(error, data.toString());
                
            })
            
        })

        //again
        fs.writeFile("ary1.txt", "aryan is a good boy", ()=>{
            console.log('done');
        
            fs.readFile("ary1.txt", (error, data)=>{
                console.log(error, data.toString());
                
            })
            
        })
    })
    
})
