const pessoa = {
    nome: "Luna",
    profissao:"Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = "11 22233334444";

console.log(pessoa.telefone);

pessoa.nome = "Luna Silva";

console.log(pessoa);


//pessoa = novaPessoa; // não permite

const pessoa1 = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 
 console.log(pessoa1);
 pessoa1.cpf = "111.222.333-55"
 pessoa1.seguroSocial

 console.log(pessoa1.cpf.substring(0,4));
