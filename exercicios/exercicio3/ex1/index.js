let btn = document.getElementById("btn")
 let paragrafo = document.getElementById("paragrafo")
btn.addEventListener("click",(()=>{
    if(paragrafo.innerText != "Hello World"){
        paragrafo.innerText = "Hello World"
        
        
    }else{
        paragrafo.innerText = "Texto inicial"
    }
 
}))
