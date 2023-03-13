var img = document.querySelector('#img')
var descricao = document.querySelector('#descricao')
var preco = document.querySelector('#preco')
var titulo = document.querySelector('#titulo')

var img2 = document.querySelector('#img2')
var descricao2 = document.querySelector('#descricao2')
var preco2 = document.querySelector('#preco2')
var titulo2 = document.querySelector('#titulo2')

var img3 = document.querySelector('#img3')
var descricao3 = document.querySelector('#descricao3')
var preco3 = document.querySelector('#preco3')
var titulo3 = document.querySelector('#titulo3')

var produtos = [
    {
        "nome": "Play Station 5",
        "descricao": "PlayStation 5 branco portátil",
        "preco": "R$4.999,99",
        "imagem": 'https://st2.depositphotos.com/4960805/47318/i/450/depositphotos_473182414-stock-photo-playstation-dual-sense-controller-isolated.jpg'
    },
    {
        "nome": "Cadeira gamer",
        "descricao": "Cadeira gamer azul com rodinhas",
        "preco": "R$600,00",
        "imagem": 'https://st3.depositphotos.com/1187563/37712/i/600/depositphotos_377120624-stock-photo-professional-modern-black-blue-computer.jpg'
    },
    {
        "nome": "Teclado/mouse gamer",
        "descricao": "Kit teclado com mouse gamer colorido",
        "preco": "R$200,00",
        "imagem": 'https://st.depositphotos.com/41600462/55097/i/450/depositphotos_550974910-stock-photo-backlit-keyboard-white-gaming-keyboard.jpg'
    },
    {
        "nome": "Monitor",
        "descricao": "Monitor para PC (1500:800)",
        "preco": "R$649,99",
        "imagem": 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

let indice = sortearNumero(produtos.length)
titulo.innerHTML = produtos[indice].nome
img.src = produtos[indice].imagem
descricao.innerHTML = produtos[indice].descricao
preco.innerHTML = produtos[indice].preco

let indice2 = sortearNumero(produtos.length)
titulo2.innerHTML = produtos[indice2].nome
img2.src = produtos[indice2].imagem
descricao2.innerHTML = produtos[indice2].descricao
preco2.innerHTML = produtos[indice2].preco

let indice3 = sortearNumero(produtos.length)
titulo3.innerHTML = produtos[indice3].nome
img3.src = produtos[indice3].imagem
descricao3.innerHTML = produtos[indice3].descricao
preco3.innerHTML = produtos[indice3].preco

function sortearNumero(size){
    let num = Math.floor(Math.random() * size)
    return num
}