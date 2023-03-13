var Produtos = {
    "nome": "Garrafa de água",
    "descricao": "Garrafa de metal preta",
    "valor": "$8,99"
}
var produto = [
    "Garrafa de água",
    "Garrafa de metal preta",
    "$8,99"
]

var p = document.querySelectorAll('.produto')
// p[0].innerHTML = Produtos.nome
// p[1].innerHTML = Produtos.descricao
// p[2].innerHTML = Produtos.valor

for(let i = 0; i < p.length; i++) {
    p[i].innerHTML += produto[i]
}

var nome = document.querySelector('#nome')
var descricao = document.querySelector('#descricao')
var valor = document.querySelector('#valor')
nome.innerHTML = Produtos.nome
descricao.innerHTML = Produtos.descricao
valor.innerHTML = Produtos.valor