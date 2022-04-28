const pessoa1 = {
nome: "Jon",
Apelido: ["Magaiver", "Tito", "Mame"]
}

function myfunc(pessoa1){

    return (`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.Apelido}`)
}
console.log(myfunc(pessoa1))

const pessoa2 ={
    nome : "Bruno",
    idade : 23,
    profissao : "Instrutor"
}
const pessoa3 ={
    nome : "Jackson",
    idade : 23,
    profissao : "Contador"
}
function exibirinfo(){
let pessoas = [pessoa2,pessoa3]
let info = pessoa2.nome.length
let info2 = pessoa3.nome.length
return pessoas
}
console.log(exibirinfo())