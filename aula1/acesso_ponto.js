const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233345",
    email: "andre@dominio.com"
}

console.log(cliente);
console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos`);

console.log(`Os 03 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);