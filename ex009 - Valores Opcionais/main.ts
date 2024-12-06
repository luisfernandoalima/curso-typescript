// Interface
interface Pessoa {
  nome: string;
  idade: number;
  carro?: string;
}

interface Aluno extends Pessoa {
  curso: string;
  nota: number;
}

let aluno: Aluno;

aluno ={
  nome: "Luis",
  idade: 19,
  curso: "Análise e Desenvolvimento de Sistemas",
  nota: 10

}