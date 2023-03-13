var p = document.querySelector('p')
var inpt = document.querySelector("#nome")




function mostrarNome() {
    var nome = inpt.value
    var data = {
        "nome": nome
    }
    p.innerHTML = data.nome
}

function atualizarDados() {
    let info = {
        "descricao": "Um panda feliz",
        "imagem": [
            "https://super.abril.com.br/wp-content/uploads/2017/03/preto-no-branco-a-explicac3a7c3a3o-cientc3adfica-para-as-cores-do-panda.png?w=1024&resize=1200,800",
            "https://www.petz.com.br/blog/wp-content/uploads/2022/10/hamster-pode-comer-berinjela-final.jpg",
            "https://blog.cobasi.com.br/wp-content/uploads/2021/07/galinha-voa-capa.png",
            "https://classic.exame.com/wp-content/uploads/2022/06/urn_newsml_afp.com_20220609_b1969629-5230-401e-b160-39548bba09c2_ipad.jpg?quality=70&strip=info&w=1024",
            "https://diariosp.com.br/blogs/agroejardim/wp-content/uploads/2022/08/Mato-no-quintal.jpg"
        ]
    }
    var paragrafo = document.querySelector('#descricao')
    var foto = document.querySelector('#foto')
    paragrafo.innerHTML = info.descricao
    foto.src = info.imagem[gerarNumero()]
}

function gerarNumero() {
    let num = Math.floor(Math.random() * 5)
    return num
}