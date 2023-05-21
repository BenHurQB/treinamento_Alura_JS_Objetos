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

for (let chave in cliente){
    console.log(chave);
}
console.log("\n");
for (let chave in cliente){
    console.log(cliente[chave]);
}
console.log("\n");
for (let chave in cliente){ // entra no objeto e mostra 
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo != "function"){
        console.log(`A chave ${chave} tem o valor  ${cliente[chave]}`)
    }
}