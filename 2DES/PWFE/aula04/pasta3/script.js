var body = document.querySelector('body')
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

for(let i = 0; i < destinos.length; i++){
    let destino = destinos[i]

    let banner = document.createElement('div')
    banner.className = 'banner'
    banner.style.backgroundImage = `url(${destino.imagem})`

    let dest = document.createElement('p')
    dest.innerHTML = destino.destino

    let desc = document.createElement('p')
    desc.innerHTML = destino.descricao

    banner.appendChild(dest)
    banner.appendChild(desc)

    body.appendChild(banner) // adiciona a div "banner" como filho no body
}
