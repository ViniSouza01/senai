document.addEventListener('keypress', function(e){
    if(e.which == 13){
        calcIdade()
    }
})

function calcIdade() {
    let dataUser = document.getElementById('ano-nasc').value
    let dataNasc = dataUser.split('-') // birth date of user in array
    let qtdAno = new Date().getFullYear() - dataNasc[0] // 2023
    let mesAtual = new Date().getMonth() + 1
    let qtdMes = (new Date().getMonth() + 1) - dataNasc[1] // 1
    let qtdDias = new Date().getDate() - dataNasc[2] // 
    let resultado = document.getElementById('resultado')
    let sexo = document.getElementsByName('sexo')
    if(mesAtual < dataNasc[1]) qtdAno-- // if the user is still going to have a birthday this year
    if(qtdMes < 0){
        qtdMes *= -1
        qtdMes = (12 - dataNasc[1]) + (dataNasc[1] - qtdMes)
    } // if the number of months is less than 0
    if(qtdDias < 0) qtd *= -1 // if the number of days is less than 0

     if(dataUser.length == 0) { // if user don't type anything
         alert('Por favor, preencha todas as informações')
     }else{
     // show images
         if(sexo[0].checked){ // if user is a man
            if(qtdMes <= 1){
                if(qtdDias <= 1) {
                    resultado.innerHTML = `Homem com ${qtdAno} anos, ${qtdMes} mes e ${qtdDias} dia`
                }
                resultado.innerHTML = `Homem com ${qtdAno} anos, ${qtdMes} mes e ${qtdDias} dias`
             }else {
                resultado.innerHTML = `Homem com ${qtdAno} anos, ${qtdMes} meses e ${qtdDias} dias`
            }
             if(qtdAno <= 13) {
                 resultado.innerHTML += '<img src="./assets/child-boy.jpg">'
             }else if(qtdAno <= 20){
                 resultado.innerHTML += '<img src="./assets/teen-boy.jpg">'
             }else if(qtdAno < 65){
                 resultado.innerHTML += '<img src ="./assets/adult-man.jpg">'
             }else {
                 resultado.innerHTML += '<img src ="./assets/old-man.jpg">'
             }
         }else { // if user is a woman
             if(qtdMes <= 1){
                if(qtdDias <= 1) {
                    resultado.innerHTML = `Mulher com ${qtdAno} anos, ${qtdMes} mes e ${qtdDias} dia`
                }
                resultado.innerHTML = `Mulher com ${qtdAno} anos, ${qtdMes} mes e ${qtdDias} dias`
             }
             resultado.innerHTML = `Mulher com ${qtdAno} anos, ${qtdMes} meses e ${qtdDias} dias`
             if(qtdAno <= 13) {
                 resultado.innerHTML += '<img src="./assets/child-girl.jpg">'
             }else if(qtdAno <= 20){
                 resultado.innerHTML += '<img src="./assets/teen-girl.jpg">'
             }else if(qtdAno < 65){
                 resultado.innerHTML += '<img src ="./assets/adult-woman.jpg">'
             }else {
                 resultado.innerHTML += '<img src ="./assets/old-woman.jpg">'
             }
         }
     }
}