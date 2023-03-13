var inputs = document.querySelectorAll('input')
var lanches = document.querySelector('#lanches')
var cozinha = document.querySelector('#cozinha')
var realizados = document.querySelector(".realizados")

function verificar() {
    let nulo = 0
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == '')
        nulo = 1
    }
    if (nulo || lanches.value == '') {
        alert('verifique as informações e tente novamente')
    } else {
        cadastrar()
    }
}

var array = []
function cadastrar() {
    let clone = document.querySelector(".pedidos").cloneNode(true)
    var data = clone.querySelector('#data')
    var pedido = clone.querySelector('#pedido')
    clone.classList.remove('model')
    pedido.innerHTML = add()
    
    data.innerHTML = agora()
    cozinha.appendChild(clone)
}

function add() {
    var json = {
        "nome": lanches.value,
        "qtd": inputs[2].value
    }
    
    //array.push(`${json.qtd} ${json.nome}`)
    array.push(json);

    inputs[2].value = ''
    lanches.value = ''
    let coisa = "";
    for(let i = 0; i < array.length; i++) {
        coisa += JSON.stringify(array[i])
    }
    return coisa;
}

function agora() {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: "short",
        timeStyle: "short"
    }).format(new Date())
}

function concluir() {
    let clone = event.target.parentNode
    realizados.classList.remove('model')
    realizados.appendChild(clone)
    clone.querySelector('button').addEventListener('click', () => {
        event.target.parentNode.remove()
    }) 
}