
const idade = Number(prompt("Digite a sua idade"))

function verificarIdade(){
    if(idade >= 18 ){
        document.querySelector("h1").innerText = "Acesso permitido"
    }else{
        document.querySelector("h1").innerText = "Acesso Negado"

    }
}

verificarIdade(idade)