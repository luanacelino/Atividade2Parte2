const jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`;

const dados = JSON.parse(jsonString);

let listaEmails = [];

for (const usuario of dados.usuarios) {

  listaEmails.push(usuario.email);
}

const emails = listaEmails.join(", ");

console.log(emails);

