let tarefa = document.getElementById("tarefa")
let addBtn = document.getElementById("add-btn")
let lista = document.getElementById("lista")

addBtn.addEventListener("click", () => {
    crateList()



})


tarefa.addEventListener("keypress", (ele) => {
    if (ele.key == "Enter") {
        crateList()
    }



})

function crateList() {
    if (tarefa.value != "") {

        let li = document.createElement("li")

        let dv = document.createElement("div")
        let p = document.createElement("p")
        p.innerText = tarefa.value



        let markBtn = document.createElement("button")
        markBtn.textContent = "Completa"
        markBtn.addEventListener("click", (element) => {

            if (markBtn.textContent == "Completa") {
                element.target.parentNode.style.textDecoration = "line-through"
                markBtn.textContent = "Desfazer"

            } else if (markBtn.textContent == "Desfazer") {

                element.target.parentNode.style.textDecoration = "none"
                markBtn.textContent = "Completa"

            }
        })


        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remover"
        removeBtn.addEventListener("click", (element) => { element.target.parentNode.remove() })
        dv.append(p, markBtn, removeBtn)
        li.append(dv)
        lista.appendChild(li)
        tarefa.value = ""

    } else {
        alert("Não pode ser adicionado uma tarefa vazia")
    }
}