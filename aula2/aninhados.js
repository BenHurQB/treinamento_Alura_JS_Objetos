const cliente = {
    nome: "João",
    idade: 24,
    emai: "joao@firma.com",
    telefone: ["1155555550", "114441111444"],
    
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",

};

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente["endereco"]);
console.log(cliente.endereco.complemento);