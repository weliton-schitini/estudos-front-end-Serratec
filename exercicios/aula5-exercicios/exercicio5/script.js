const lista = document.getElementById("lista")
const produto = document.getElementById("produto")
const adicionar = document.getElementById("btn-adicionar")
const exibir = document.getElementById("btn-exibir")


const listaDeProdutos = []
adicionar.addEventListener("click", () => {
    listaDeProdutos.push(produto.value)

    produto.value = " "

})



console.log(listaDeProdutos)
exibir.addEventListener("click", () => {
    for (let i = 0; i < listaDeProdutos.length; i++) {
        lista.innerHTML += `<li>${listaDeProdutos[i]}</li>`

    }
    lista.style.visibility = "visible"
    exibir.style.visibility = "hidden"
    adicionar.innerText = "atualize a pagina para criar uma nova lista"
    adicionar.style.padding = "50px"
    adicionar.style.background = "yellow"
    adicionar.style.color = "black"
    adicionar.disabled = true 
    produto.style.display = "none"
})





