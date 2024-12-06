// Interface
interface Pessoa {
  nome: string;
  idade: number
}

interface Aluno extends Pessoa{
  curso: string;
  nota: number
}

let aluno: Aluno



type Animal ={
  nome: string;
  especie: string
}

type Cachorro = Animal &{
  raça: string
}

let cachorro: Cachorro
