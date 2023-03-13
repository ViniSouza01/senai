const inpEmail = document.querySelector('#email');
const inpSenha = document.querySelector('#senha');

const base = [
    {
        "email": "teste@gmail.com",
        "senha": "4321",
        "nome": "teste testador",
        "id": 4
    },
    {
        "email": "teste@gmail.com",
        "senha": "1234",
        "nome": "Ramiro Golçalves",
        "id": 2
    },
    {
        "email": "teste@gmail.com",
        "senha": "5678",
        "nome": "Alexander",
        "id": 3
    }
];

function validar() {
    let email = inpEmail.value;
    let senha = inpSenha.value;

    let usuario = base.find((user) => {
        return(user.email == email && user.senha == senha)
    });

    if(usuario != undefined) {
        let info = {
            "id": usuario.id,
            "nome": usuario.nome
        }

        localStorage.setItem("usuario", JSON.stringify(info)); // o nome que será armazenado as informações será 'usuario'

        window.location.href = './home.html'
    } else {
        alert("SAI FORA")
    }

    // if(email == "fulano@gmail.com" && senha == "12345") {
    //     let info = {
    //         "username": "Fulano da Silva",
    //         "userId": 5
    //     }
    //     localStorage.setItem("userdata", JSON.stringify(info));
    //     window.location.href = './home.html'
    // } else {
    //     alert('login failed');
    // }
}