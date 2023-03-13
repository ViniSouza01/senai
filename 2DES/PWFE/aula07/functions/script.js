const array = [5, 6, 7, 10, 2, 6];
const body = document.querySelector('body');


// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// vetor.forEach((valor, indice, vetorInteiro) => {});
array.forEach((item, indice) =>{
    let calc = item * 2;
    
    let texto = document.createElement('p');
    // <p>10</p>
    texto.innerHTML = `${item} x 2 = ${calc}`;
    body.appendChild(texto);
});

// map, filter, find

// map remonta um vetor a partir do original
let novoArray = array.map((item, indice) => {
    let calc = item * 2;

    let texto = document.createElement("h3");

    texto.innerHTML = calc;
    return texto;
});

// console.log(novoArray);

// filter filtra o vetor original, criando um novo vetor a partir de uma condição definida

let filterArray = array.filter((item, indice) => {
    return ((item > 5) && (item < 10)); // (3) [6, 7, 6]
    // return item >= 5;
});

// console.log(filterArray);

// find não retorna um vetor, mas uma informação específica a partir de uma condição
let data = array.find((item, indice) => {
    return item == 5;
});

// console.log(data);


// 

let info = [
    {
        "nome": "Fulano da Silva",
        "matricula": 12345,
        "vendas": 5
    },
    {
        "nome": "Beltrano da Cunha",
        "matricula": 54321,
        "vendas": 10
    },
    {
        "nome": "Ciclano da Motoca",
        "matricula": 56789,
        "vendas": 8
    }
];

let metaVendas = 7;

let vendedores = info.filter((valor, i) => {
    return valor.vendas >= 7;
});

let vendedor = info.find((data) => {
    return data.matricula == 54321;
});

console.log(vendedor.nome);