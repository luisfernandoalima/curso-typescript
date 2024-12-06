// Interface
interface Pessoa<T> {
  nome: string;
  idade: number;
  profissao: T;
}

type Aluno = {
  curso: string;
};

interface Engenheiro {
  crea: string;
}

interface Medico {
  crm: string;
}
let aluno: Pessoa<Aluno>;
let engenheiro: Pessoa<Engenheiro>;
let medico: Pessoa<Medico>;
