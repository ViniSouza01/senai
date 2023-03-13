var user = {
    "nome":"Fulano",
    "idade":20,
    "cadastrado":true,
    "notas":[8,5,6]
}

var user2 = {
    "nome": "Ciclano",
    "idade": 20,
    "cadastrado": false,
    "notas": [7,9,8]
}

var users = []

users.push(user)
users.push(user2)


for(let i = 0; i < users.length; i++){
    console.log(`Usuario ${i+1}: ` + users[i].nome)
}