document.addEventListener('keypress', function(e){
    if(e.which == 13){
        calcIdade()
    }
})

function calcIdade() {
    let ano = document.getElementById('ano-nasc').value
    let anoAtual = new Date().getFullYear()
    let resultado = document.getElementById('resultado')
    var idadeAtual = anoAtual - ano
    let sexo = document.getElementsByName('sexo')
    if(ano.length == 0) {
        alert('Por favor, preencha todas as informações')
    }else{
    // apresentação de imagens
        if(sexo[0].checked){
            resultado.innerHTML = `Homem com ${idadeAtual} anos`
            if(idadeAtual <= 13) {
                resultado.innerHTML += '<img src="./assets/child-boy.jpg">'
            }else if(idadeAtual <= 20){
                resultado.innerHTML += '<img src="./assets/teen-boy.jpg">'
            }else if(idadeAtual < 65){
                resultado.innerHTML += '<img src ="./assets/adult-man.jpg">'
            }else {
                resultado.innerHTML += '<img src ="./assets/old-man.jpg">'
            }
        }else {
            resultado.innerHTML = `Mulher com ${idadeAtual} anos`
            if(idadeAtual <= 13) {
                resultado.innerHTML += '<img src="./assets/child-girl.jpg">'
            }else if(idadeAtual <= 20){
                resultado.innerHTML += '<img src="./assets/teen-girl.jpg">'
            }else if(idadeAtual < 65){
                resultado.innerHTML += '<img src ="./assets/adult-woman.jpg">'
            }else {
                resultado.innerHTML += '<img src ="./assets/old-woman.jpg">'
            }
        }
    }
}