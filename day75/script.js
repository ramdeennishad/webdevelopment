console.log("hiii this is for callbacl and promises")
console.log("hiii this is for callbacl and promises1111")

setTimeout(()=>{
    console.log("I am inside Settimeout")
},0)

setTimeout(()=>{
    console.log("I am inside Settimeout2")
},0)


console.log("the End")

const fn=() => {
  console.log("nothing")
}


const callback=(arg,fn) => {
  console.log(arg)
  fn()
}




const loadScript=(src, callback) => {
  let sc=document.createElement("script")
  sc.src =src;
  sc.onload=callback("Aryan Calback", fn);
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)