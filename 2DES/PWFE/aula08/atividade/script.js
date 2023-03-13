const inpMatricula = document.querySelector('#matricula');
const inpSenha = document.querySelector('#senha');

var data = [
    {
        "nome": "Alberto Adalberto",
        "matricula": 12345,
        "senha": "abc123",
        "salario": 2570.80,
        "responsavel": [
            {
                "cod": "ca1423",
                "endereco": "Rua das ruas, 43",
                "valor": 455000
            },
            {
                "cod": "ap1321",
                "endereco": "Rua das avenidas, 36, AP. 4",
                "valor": 455000
            }
        ]
    },
    {
        "nome": "Jair Javindo",
        "matricula": 132455,
        "senha": "asd321",
        "salario": 2570.80,
        "responsavel": [
            {
                "cod": "ca3321",
                "endereco": "Rua sem calcada, 59",
                "valor": 455000
            },
            {
                "cod": "ap1221",
                "endereco": "Alameda dos Santos, 22, AP. 7",
                "valor": 455000
            },
            {
                "cod": "ap225",
                "endereco": "Alameda das avenidas, 32, AP. 7",
                "valor": 55000
            }
        ]
    }
];

function autenticar() {
    let matricula = inpMatricula.value;
    let senha = inpSenha.value;
    let usuario = data.find((login) => {
        return login.matricula == matricula && login.senha == senha;
    });
    console.log(matricula);
    console.log(senha);
    


    if(usuario != undefined) {
        let info = {
            "matricula": usuario.matricula,
            "nome": usuario.nome,
            "responsavel": usuario.responsavel
        }
        localStorage.setItem('usuario', JSON.stringify(info));
        console.log(JSON.stringify(info));

        window.location.href = './main/imobiliaria.html';
    } else {
        alert('Matricula ou senha incorretos');
    }
}