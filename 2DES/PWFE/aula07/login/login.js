const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

function autenticar() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then((resp)=> {return resp.json()})
    .then(usuarios => {
        let usuario = usuarios.find((valor, indice) => {
            return ((valor.email == email.value) && (valor.username == senha.value));
        });
        
        if(usuario != undefined){
            window.location.href = '../folder/index.html';
        } else {
            alert('usuario ou senha invalidos');
        }
    });
}

