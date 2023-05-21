const dados = require("./cliente.json"); //função permite passar o caminho de um arquivo terminado em .json

console.log(dados.nome);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados); // salva em string

console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); // transforma em json
console.log(objetoCliente);