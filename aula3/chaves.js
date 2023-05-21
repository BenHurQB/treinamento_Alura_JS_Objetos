const cliente = {
    nome: "João",
    idade: 24,
    emai: "joao@firma.com",
    telefone: ["1155555550", "114441111444"],
    
};
 /*
cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",

}];
*/
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É nescessário ter um endereço cadastrado")
}