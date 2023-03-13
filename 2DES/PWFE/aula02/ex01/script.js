

function sortear() {
    var resultado = document.getElementById('resultado')
    var nomes = document.getElementById('textarea').value
    let num = Math.ceil(Math.random() * 9)
    let array = nomes.split("\n")
    resultado.innerText = array[num]
}