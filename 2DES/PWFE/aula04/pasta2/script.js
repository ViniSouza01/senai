var banner = document.querySelector('.banner')
var descricao = document.querySelector('#descricao')
var destino = document.querySelector('#destino')

//  Vetor com 3 objetos json
var destinos = [
    {
        "imagem": 'https://viajesantacruz.com.br/wp-content/uploads/2022/01/osasco-3.jpg',
        "destino": 'Osasco',
        "descricao": 'Planos a partir de R$120.00'
    },
    {
        "imagem": 'https://portal.loft.com.br/wp-content/uploads/2020/07/ipanema.jpg',
        "destino": 'Ipanema',
        "descricao": 'Curta as ferias em familia'
    },
    {
        "imagem": 'https://www.vounajanela.com/wp-content/uploads/2016/01/londres-1050x599.jpg',
        "destino": 'Londres',
        "descricao": 'Conheça as piramides'
    }
]

function viagem(){
    let indice = gerarNumero(destinos.length)
    destino.innerHTML = destinos[indice].destino
    descricao.innerHTML = destinos[indice].descricao
    banner.style.backgroundImage = `url(${destinos[indice].imagem})`
}


function gerarNumero(size) {
    let num = Math.floor(Math.random() * size)
    return num
}