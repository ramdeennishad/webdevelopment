let button=document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert(" i was clicked")
    document.querySelector(".box").innerHTML="<b> Yeyyy you were clicked</b> enjoy your click"
})

button.addEventListener("contextmenu", ()=>{
    alert(" dont hack us by Right click please")
    
})

document.addEventListener("keydown", (e)=>{

    console.log(e.key, e.keyCode)
    
})