const { id, nome } = JSON.parse(localStorage.getItem('usuario')); // pega as informações armazenadas no nome 'usuario'
const saudacao = document.querySelector('#saudacao');
const body = document.querySelector('body');

saudacao.innerHTML += nome;

const base = [
    {
        "id": 3,
        "tarefas": [
            {
                "data": "16/01/2023",
                "descricao": "Ir na igreja",
                "status": 1
            },
            {
            "data": "29/02/2023",
            "descricao": "ir ao dentista",
            "status": 0
            },
            {
                "data": "03/03/2023",
                "descricao": "entregar trabalho do UL",
                "status": 0
            }
        ]
    },
    {
        "id": 4,
        "tarefas": [
            {
                "data": "16/01/2023",
                "descricao": "Ir para a escola",
                "status": 1
            },
            {
            "data": "29/02/2023",
            "descricao": "ir ao cinema",
            "status": 1
            },
            {
                "data": "03/03/2023",
                "descricao": "limpar a casa",
                "status": 0
            }
        ]
    }
];

const data = base.find(item => {
    return item.id == id // ele procura as informações que estão em "data" e retorna apenas aquela que é igual ao id procurado
});

if(data != undefined) {
    data.tarefas.forEach((tarefa) => {
        criarTarefa(tarefa.data, tarefa.descricao, tarefa.status);
    })    
}


function criarTarefa(data, descricao, status) {
    let card = document.createElement("div");
    let pdata = document.createElement("p");
    let pdescricao = document.createElement("p");
    pdata.innerHTML = data;
    pdescricao.innerHTML = descricao;
    if(status == 1) {
        card.style.backgroundColor = 'green';
    }

    card.appendChild(pdata);
    card.appendChild(pdescricao);

    body.appendChild(card);
}