let curtir = document.getElementById("curtir")
let descurtir = document.getElementById("descurtir")
let emoticom = document.getElementById("img")

console.log(emoticom.src)
let cont = 0
curtir.addEventListener("click",(()=>{
    document.getElementById("curtidas").innerText = ++cont
   emoticom.src = "../images/star.png"

}))


descurtir.addEventListener("click",(()=>{
    if(cont > 0){
         document.getElementById("curtidas").innerText = --cont
    emoticom.src = "../images/sad.png"
    }else if(cont == 0){
        emoticom.src = "../images/dead.png"
    }
}))