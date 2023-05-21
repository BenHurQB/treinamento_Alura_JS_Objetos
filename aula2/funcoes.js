const cliente = {
    nome: "João",
    idade: 24,
    emai: "joao@firma.com",
    telefone: ["1155555550", "114441111444"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log("saldo insuficiente")
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: R$ ${this.saldo}`);
        }
    }
};
cliente.efetuaPagamento(250);
cliente.efetuaPagamento(25);
