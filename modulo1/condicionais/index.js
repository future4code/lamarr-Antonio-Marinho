/*
1 --///////////////////////////////////////////////////////////////////////////////
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
 
a) Explique o que o código faz. Qual o teste que ele realiza? 
  O código logo a cima captura o valor digitado pelo o usuário 
usando o operador % e dividindo por 2 e o comparando seu resto a 0(Zero),
se sim mostra a mensagem no console "Passou no teste.", se não "Não passou no teste."

b) Para que tipos de números ele imprime no console "Passou no teste"? 
  Se o número for igual a 0(zero)
c) Para que tipos de números a mensagem é "Não passou no teste"? 
    Se o número for diferente de 0(zero)


2 --///////////////////////////////////////////////////////////////////////////////
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
      Serve para localizar a fruta e retornar no console a fruta e o preço
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
      "O preço da fruta, Maçã, é, R$, 2.25"
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
impressa no console se retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? 
      Se é Pêra, ele não irá dá erro

3 --///////////////////////////////////////////////////////////////////////////////
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)

a) O que a primeira linha está fazendo?
  recebendo um valor do usuário
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
E se fosse o número -10?
  Digitando 10 = "Esse número passou no teste"
  Digitando -10 = vai dá erro
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
  se digitar como sugerido -10 ele vai dá um erro pois a mensagem estar equivocada 
  sem o complemento else
*/
////Exercícios de escrita de código
//1° Exercícios
/* let idade = Number(prompt("Digite sua idade:"))

function permissaoDirigir(){
  if (idade >= 18) {
    console.log("Você pode dirigir")
  } else {
    console.log("Você não pode dirigir")
  }
}
permissaoDirigir() */
//2° Exercícios
/* let turno = prompt("Escolha M(matutino), V(Vespertino) ou N(Noturno)")

function infTurno(){
  if (turno =="M") {
    console.log("Bom Dia");
  }else if (turno == "V") {
    console.log("Boa Tarde");
  }else{
    console.log("Boa Noite");
  }
}
infTurno() */

/* let turno = prompt("Escolha M(matutino), V(Vespertino) ou N(Noturno)");

switch (turno){
  case "M":
    console.log("Bom dia");
    break;
  case "V":
    console.log("Boa tarde");
    break;
  case "N":
    console.log("Boa Noite");
    break;
    default:
      console.log("Verifique se as informaçoes e escolha uma opção a seguir: Escolha M(matutino), V(Vespertino) ou N(Noturno)");
} */

/* let valor = Number(prompt("Digite o valor do ingresso"));
let filme = prompt("Filme escolhido é do gênero de Fantasia? escreva S ou N" );
if (valor <= 15 && filme =="S"){
  console.log("Bom filme")
}else{
  console.log("Escolha outro filme :(")
} */
