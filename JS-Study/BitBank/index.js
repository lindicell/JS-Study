class Cliente {
    nome;
    cpf;

}
class ContaCorrente {
    agencia;
    saldo;
 
    sacar(valor) {
        let valorSacado = 20;
        if (this.saldo >= valor) {
            this.saldo -= valor
        }
    }

    depositar(valor) {
        if (valor > 0)
            this.saldo += valor;
    }
}

const clientex = new Cliente();
clientex.nome = "Teste";
clientex.cpf = "1234567890";

const clientey = new Cliente();
clientey.nome = "ABC";
clientey.cpf = "1234555890";


const ContaCorrenteTeste = new ContaCorrente();
ContaCorrenteTeste.saldo = 0;
ContaCorrenteTeste.agencia = 01;

ContaCorrenteTeste.depositar(100);
ContaCorrenteTeste.sacar(50);
ContaCorrenteTeste.depositar(200);


console.log(ContaCorrenteTeste);
