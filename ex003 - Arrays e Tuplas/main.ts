let lista: string[]

lista = ['Luis', 'Fernando']

for(let c in lista){
    console.log(lista[c])
}

let segundaLista: Array<number>

segundaLista = [1, 2]

for(let c in segundaLista){
    console.log(segundaLista[c])
}

// Tupla
let aluno: [string, number, boolean]

aluno = ["Luis", 19, true]

for(let c in aluno){
    console.log(aluno[c])
}