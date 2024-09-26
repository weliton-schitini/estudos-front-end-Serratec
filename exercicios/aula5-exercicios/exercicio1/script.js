


const nota = prompt("Digite sua nota")
let img = document.getElementById("img")
const h1 = document.querySelector("h1")

function calcNota(nota) {
    
   
    if (nota >= 60 && nota != null && nota <= 100) {
        h1.innerText = `Você foi aprovado com nota ${nota}`
        h1.style.color = "green"
        img.src = "../exercicio1/images/star.png"


    } else if (nota < 60 && nota != null && nota >= 0) {
        h1.innerText = `Você foi reprovado com nota ${nota}`
        h1.style.color = "red"
        img.src = "../exercicio1/images/sad.png"

    } else {
        nota = prompt("Digite um numero entre 0 e 100")
        
    }
    calcNota(nota)

}

calcNota(nota)

console.log(document.querySelector("h1").innerText)