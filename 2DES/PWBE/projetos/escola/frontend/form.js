const dados = document.querySelector('#dados') // pegou o elemento main do html e deu nome de dados

const options = { method: 'GET' };

fetch('http://localhost:3000/aluno/listar', options)
  .then(response => response.json())
  /* response é o que guarda todas as informacoes
  e ele mostra na tela que foi enviado apos o botao ser clicado */
  .then(response => {
    response.forEach(element => { // ele vai percorrer o response (as informacoes)
      let linha = document.createElement('div') // criou uma div chamado linha
      linha.innerHTML = `Ra:${element.ra} Nome:${element.nome} Data:${element.nascto} Turma:${element.id_turma}`
      // na div, terão todas as informacoes 
      dados.appendChild(linha) // adiciona as linhas (informacoes) dentro do main
    });
  })
  .catch(err => console.error(err));