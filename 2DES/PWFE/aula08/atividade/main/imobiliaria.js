let texto = document.querySelector('#welcome');
const { matricula, nome, responsavel } = JSON.parse(localStorage.getItem('usuario'));
const body = document.querySelector('body')

texto.innerHTML += nome;

responsavel.forEach((element, index) => {
    let pcod = document.createElement('p');
    let pendereco = document.createElement('p');
    let pvalor = document.createElement('p');
    let title = document.createElement('h3');
    let linha = document.createElement('hr');

    title.innerHTML = `${index + 1}° propriedade`;
    pcod.innerHTML = `Cod: ${JSON.stringify(element.cod)}`;
    pendereco.innerHTML = `Endereco: ${JSON.stringify(element.endereco)}`;
    pvalor.innerHTML = `Valor: ${JSON.stringify(element.valor)}`;

    body.appendChild(title)
    body.appendChild(pcod);
    body.appendChild(pendereco);
    body.appendChild(pvalor);
    body.appendChild(linha);
});

function calcComissao() {
    
}

