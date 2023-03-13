const matricula = document.querySelector('#matricula');
const senha = document.querySelector('#senha');

function autenticar() {
    let data = {
        "matricula": matricula.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST", // define a ação
        "headers": {
            "Content-Type": "application/json", // informa que as informações estão num json
        },
        "body": JSON.stringify(data) // transforma o json em uma string
    }

    fetch("http://localhost:3000/login", options)
    .then(function(resp) {return resp.json()}) // ele vai retornar a resposta dada
    .then(info => {
        if(info.id != undefined){
            localStorage.setItem('corretor', JSON.stringify(info)); // armazena no armazenamento local do navegador

            window.location.href = './pages/home.html'
        } else {
            alert(info.msg); // {"msg": "Usuario ou senha inválidos"}
        }
    })
}