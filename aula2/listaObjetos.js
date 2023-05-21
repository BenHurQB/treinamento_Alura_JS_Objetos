const cliente = {
    nome: "João",
    idade: 24,
    emai: "joao@firma.com",
    telefone: ["1155555550", "114441111444"],
    
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",

}];

//console.log(cliente);

cliente.enderecos.push({
    rua: "Rua Josepf Lever",
    numero: 404,
    apartamento: false,
})
console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);