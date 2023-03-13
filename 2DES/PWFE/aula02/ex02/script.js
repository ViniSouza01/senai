function sortear() {
    var resultado = document.getElementById('resultado')
    var nomes = document.getElementById('textarea').value
    let array = nomes.split("\n")
    let qtd = document.getElementById('qtd').value
    if(qtd < 1 || qtd > 10 || nomes == '') {
        alert('Por favor, verifique todos os dados')
    }else{
        resultado.innerText = ''
        sorteio(qtd, array, resultado)
    }
}

function sorteio(qtd, array, resultado) {
    let i = 0, encontrado, j, n = []
    do {
        n[i] = Math.floor(Math.random() * qtd) // vector n receive an aleatory number, for example, 3
        if(i == 0) i++
            else {encontrado = 0
            for(j = 0; j < i; j++){
                if(n[i] == n[j]) // if n[i] that is 3 is equal than n[j] that is 3 also
                encontrado = 1 // "encontrado" receives 1
            }
            if(!encontrado) i++ // and the counter "i" only will pass to next vector position when "encontrado" == 0
        }
    } while (i < qtd);

    for(i = 0; i < qtd; i++){
        resultado.innerText += i+1 + ": " + array[n[i]] + "\n"
    }
}