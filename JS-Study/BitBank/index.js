import { Cliente } from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"


const diretor = new Diretor("Rodrigo",10000, 12345678900);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Luis",50000, 12345678901);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Lais", 123456,"12345");

const estaLogado = SistemaAutenticacao.login(diretor,"123");
const estaLogado1 = SistemaAutenticacao.login(gerente,"1234");
const estaLogado2 = SistemaAutenticacao.login(cliente,"12345");


console.log(estaLogado, estaLogado1, estaLogado2);
