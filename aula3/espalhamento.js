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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
console.log("\n");
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero:cliente.enderecos[0].numero,
    endereco: cliente.enderecos[0],
};
console.log(encomenda);
console.log("\n");
const encomenda1 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};
console.log(encomenda1);
