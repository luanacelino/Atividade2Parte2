const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;

function resumoPedidos(jsonString) {

  const dados = JSON.parse(jsonString);

  let entregues = 0;
  let processando = 0;
  let totalValor = 0;

  for (const pedido of dados.pedidos) {
    totalValor += pedido.total;

    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      processando++;
    }
  }

  const totalFormatado = totalValor.toFixed(2).replace('.', ',');

  return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${totalFormatado}`;
}

const resultado = resumoPedidos(pedidosJSON);
console.log(resultado);

