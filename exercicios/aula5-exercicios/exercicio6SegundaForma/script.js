
let tarefa = document.getElementById("tarefa")
let addBtn = document.getElementById("add-btn")
let lista = document.getElementById("lista")

let listaDeTarefas = []


addBtn.addEventListener("click",()=>{
   
    if(tarefa.value != ""){
    let tarefaObj = document.createElement("object")
    tarefaObj.descricao = tarefa.value
    tarefaObj.completa = false
    listaDeTarefas.push(tarefaObj)

    let li = document.createElement("li")
    let div = document.createElement("div")
    let p = document.createElement("p")

    for(let i = 0; i < listaDeTarefas.length;i++){
        p.innerText = listaDeTarefas[i].descricao
        listaDeTarefas[i].completa = true
       
    }

    

    let completaBtn = document.createElement("button")
    completaBtn.innerText  = "Completa"

    let removeBtn = document.createElement("button")
    removeBtn.innerText = "Remover"

    div.append(p,completaBtn,removeBtn)
    li.appendChild(div)

    lista.appendChild(li)
    
    completaBtn.addEventListener("click",(ele)=>{
        if(ele.target.innerText == "Completa"){
            p.style.textDecoration = "line-through"
            ele.target.innerText = "Desfazer"
            for(let i = 0;i < listaDeTarefas.length;i++){
                listaDeTarefas[i].completa = true
                console.log(listaDeTarefas[i].completa)
            }
        }else{
            p.style.textDecoration = "none"
            ele.target.innerText = "Completa"
            for(let i = 0;i < listaDeTarefas.length;i++){
                listaDeTarefas[i].completa = false
                console.log(listaDeTarefas[i].completa)
            }
        }
        
    })

    removeBtn.addEventListener("click",(ele)=>{
        ele.target.parentNode.remove()
    
    })


}else{
    alert("Não é possível adicionar uma tarefa vazia")
}

tarefa.value = ""

console.log(listaDeTarefas)

})

tarefa.addEventListener("keypress", (ele) => {
    if(ele.key == "Enter"){
    if(tarefa.value != ""){
        let tarefaObj = document.createElement("object")
        tarefaObj.descricao = tarefa.value
        tarefaObj.completa = false
        listaDeTarefas.push(tarefaObj)
    
        let li = document.createElement("li")
        let div = document.createElement("div")
        let p = document.createElement("p")
    
        for(let i = 0; i < listaDeTarefas.length;i++){
            p.innerText = listaDeTarefas[i].descricao
           
        }
    
        let completaBtn = document.createElement("button")
        completaBtn.innerText  = "Completa"
    
        let removeBtn = document.createElement("button")
        removeBtn.innerText = "Remover"
    
        div.append(p,completaBtn,removeBtn)
        li.appendChild(div)
    
        lista.appendChild(li)
        
        completaBtn.addEventListener("click",(ele)=>{
            if(ele.target.innerText == "Completa"){
                p.style.textDecoration = "line-through"
                ele.target.innerText = "Desfazer"
            }else{
                p.style.textDecoration = "none"
                ele.target.innerText = "Completa"
            }
            
        })
    
        removeBtn.addEventListener("click",(ele)=>{
            ele.target.parentNode.remove()
        
        })
    
    
    }else{
        alert("Não é possível adicionar uma tarefa vazia")
        
    }
    tarefa.value = ""

   

}
    
    })






