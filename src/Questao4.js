const endereco = {
  rua: "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  cep: "01310-100"
};

function formatarEndereco(obj) {

  return `${obj.rua}, ${obj.numero} - ${obj.cidade} - CEP: ${obj.cep}`;
}

const resultado = formatarEndereco(endereco);
console.log(resultado);

