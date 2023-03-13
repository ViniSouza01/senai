const tarefas = document.querySelector("#tarefa") // input
const listaPendentes = document.querySelector('#pendentes')
const listaFinalizadas = document.querySelector("#finalizadas")
const card = document.querySelector('.card') // the 'clone' is the div ".card"

function cadastrar() {
    var clone = card.cloneNode(true)
    
    clone.classList.remove("model")

    clone.querySelector('#item').innerHTML = tarefas.value

    clone.querySelector('#data').innerHTML = agora()  

    clone.querySelector("button").addEventListener("click", (e) => {
        let elemento = e.target.parentNode
        e.target.remove()
        listaFinalizadas.appendChild(elemento)
        elemento.querySelector('#data').innerHTML = agora()
    })

    listaPendentes.appendChild(clone)
}

function agora() {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: "short",
        timeStyle: "medium"
    }).format(new Date()) // return an date and time formated
}