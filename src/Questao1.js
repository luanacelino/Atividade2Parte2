
const usuario = {
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
};

const jsonString = JSON.stringify(usuario); // Objeto → JSON
const usuarioRecuperado = JSON.parse(jsonString); // JSON → Objeto

console.log(jsonString);
console.log(usuarioRecuperado);

