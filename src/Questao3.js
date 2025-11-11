const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;

function produtosAcimaDe50(jsonString) {

  const dados = JSON.parse(jsonString);

  let nomes = [];

  for (const produto of dados.produtos) {
    
    if (produto.preco > 50) {
    
      nomes.push(produto.nome);
    }
  }

  return nomes;
}

const resultado = produtosAcimaDe50(produtosJSON);
console.log(resultado);
