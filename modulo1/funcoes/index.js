function myInformation(){
    return("Eu sou Jarbas Marinho, tenho 33 anos, moro em Fortaleza-CE a capital do sol e estou me formando em Ciências Contábeis e parei por um tempo a faculdade de Engenharia de Software a qual pretendo voltar em alguns meses.");  
}
console.log(myInformation());

//Estou com dificuldade de realizar isso direitinho

let nome =prompt("Digite seu nome")
let idade =Number(prompt("Digite sua idade"))
let cidade =prompt("Digite sua cidade")
let profissão =prompt("Digite sua profissão")
function myInformation2(nome, idade, cidade, profissão){
    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}

console.log(myInformation2(nome, idade, cidade, profissão))

//2 - Escreva as funções explicadas abaixo:
//a)
let num1 =Number(prompt("Digite um número"))
let num2 =Number(prompt("Digite mais um número"))

function soma(num1, num2){
    return ( num1 + num2)
}

console.log(soma(num1, num2));
//b
let num1b =Number(prompt("Digite um número"))
let num2b =Number(prompt("Digite mais um número"))

function booleano(num2b, num2b){
    return ( num2b >= num2b)
}
console.log(booleano(num2b, num2b));

//C
let num1p =Number(prompt("Digite um número"))

function par(num1p){
    return ( num1p %2)
}
console.log(par(num1p));

//D
let num1m = prompt("Escreva uma mensagem")

function mensagem(num1m){
    return ( num1m )
}
console.log(mensagem(num1m.length));
console.log(mensagem(num1m.toUpperCase())); 