// let obj = {
//     a:1,
//     b:"Aryan"

// }

// console.log(obj);

// let animal={
//     eats: true
// }
// let rabbit={
//     jumps : true
// }

// rabbit.__proto__ = animal;//set rabbit.[[prototype]]=animal



class Animal{
    constructor(name){
        this.name = name
        console.log("object is created.....")
    }

    eats(){
        console.log('kha raha hoon me abhi');
        
    }

    jumps(){
        console.log('kood raha hoon abhi ');
        
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log('Object is created and he is lion...');
        
    }
    eats(){
        super.eats()
        console.log('kha raha hoon roar lion ');
        
    }

}


let a=new Animal("Aryan");
console.log(a);

let l= new Lion("Nishad")
console.log(l)


