function sortear(){
    let text = document.getElementById('textarea').value
    var array = text.split("\n")
    let resultado = document.getElementById('h2')
    let qtdTime = document.getElementById('number').value
    
    if(array.length <= 1 || qtdTime.length == 0){ // se o usuário não preencher nada
        alert('Por favor, preencha os dados corretamente')
    }else if(array.length % qtdTime != 0){ // se a divisão de times entre os grupos resultar em decimal
        alert('A divisão entre os times para cada grupo não dará inteira')
    }else{ // if everything is ok
        resultado.innerText = ''
        sorteio(resultado, array, qtdTime)
    }
}

function sorteio(resultado, array, qtdTime) {
    let i = 0, encontrado = 0, j
    let n = []
    // fazer um vetor com números não repetidos
    do {
        n[i] = Math.floor(Math.random() * array.length) // gerar um número inteiro aleatório entre 0 e o último índice do vetor
        if(i == 0) i++ // colocar o primeiro número e ir para o próximo índice
        else {
            encontrado = 0
            for(j = 0; j < i; j++) {
                if(n[i] == n[j]) encontrado = 1 // se o número for igual, "encontrado" recebe 1
            }
            if(!encontrado) i++ // caso "encontrado" for igual a 0, "i" passa para o próximo
        }
    }while(i < array.length)
    saida(array, qtdTime, resultado, n) // chama a função saida
}

function saida(array, qtdTime, resultado, n) {
    let i = 0, j = 0
    let grupo = 1
    let indefinido = 0
    let times = 0
    do {
        if(i == 0){
            resultado.innerHTML += `<h2>Grupo ${grupo}</h2>` // colocar como título "Grupo 1", "Grupo 2", "Grupo 3"
        }
        for(i = 0; i < qtdTime; i++){
            resultado.innerHTML += array[n[j]] + ", " // colocar os nomes dos times
            j++
        }
        if(array[n[j]] == undefined) break // se o vetor não tiver mais nomes de times, sair do laço "while"
        i = 0 // o contador se torna zero para colocar o título
        grupo++
        console.log(times)
    } while (grupo < array.length)
    
}
