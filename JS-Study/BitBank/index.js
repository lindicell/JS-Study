import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const clientex = new Cliente("Teste", 1234567890);
const clientey = new Cliente("ABC", 1234555890);

let numeroDeContas = 0;


const ContaCorrenteTeste = new ContaCorrente(clientex, 10);
ContaCorrenteTeste.depositar(100);
numeroDeContas++;

const ContaCorrenteTestey = new ContaCorrente(clientey, 20);
ContaCorrenteTeste.transferir(50, ContaCorrenteTestey);
numeroDeContas++;



console.log(numeroDeContas);