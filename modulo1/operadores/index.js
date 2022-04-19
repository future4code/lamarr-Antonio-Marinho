/*
/////////////////////////Início tarefa 1°////////////////
const bool1 = true       -v
const bool2 = false      -f
const bool3 = !bool2     -v

let resultado = bool1 && bool2
console.log("a. ", resultado) ****** Resposta A: false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) ****** Resposta B: false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) ****** Resposta C: True

console.log("d. ", typeof resultado) ****** Resposta D: True

/////////////////////////Fim tarefa 1°///////////////////
*********************************************************
/////////////////////////Início tarefa 2°////////////////
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)   
****** Resposta:Não deixando claro a finalidade do seu código para 
dizer se esta certo ou equivodado, mas pela lógica ele ira somar 
os dois valores informados pelo usuário. 
>>> Por fim o tipo de variavel que ele usa esta equivocada devendo 
ser usada  uma let ao inves de const******
/////////////////////////Fim tarefa 2°///////////////////
*********************************************************
/////////////////////////Início tarefa 3°////////////////
Trocar o tipo de variavel para let e transformar os 
números recebidos pelo prompt usando parseInt
da seguinte maneira:

let soma = parseInt(primeiroNumero) + parseInt(segundoNumero)

/////////////////////////Fim tarefa 3°///////////////////
*/ 
/////////////////Iício Exercícios de escrita de código 1°///////////////////
alert("Vamos a nossa primeira atividade");
let idade1 = prompt("Olá usuário, qual sua idade?");
let idade2 = prompt("Qual idade do seu melhor amigo ou da sua melhor amiga?");
//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a 
//do seu melhor amigo?", seguido pela resposta (true ou false)
let soma = parseInt(idade1) || parseInt(idade2);
let diferena = parseInt(idade1) - parseInt(idade2);
//d) Imprima na console a diferença de idade 
//(não tem problema se sair um número negativo)

console.log("Sua idade é maior do que a, "+ soma + " do seu melhor amigo?");
console.log("Diferença de idade, em relação ao seu melhor amigo é: " + diferena);

/////////////////Fim Exercícios de escrita de código 1°/////////////////////
/////////////////Iício Exercícios de escrita de código 2°///////////////////
alert("#########Vamos a nossa 2° atividade");
let par1 = prompt("Usuário que insira um número par");

//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a 
//do seu melhor amigo?", seguido pela resposta (true ou false)
let resultado1 = parseInt(par1) % parseInt(2);

//d) Imprima na console a diferença de idade 
//(não tem problema se sair um número negativo)

console.log("resto da divisão desse número por 2, "+ resultado1);
///O resto da divisão sendo informado um número par sempre será 0;
/////////////////Fim Exercícios de escrita de código 2°/////////////////////
/////////////////Iício Exercícios de escrita de código 3°///////////////////
alert("#########Vamos a nossa 3° atividade");
let idade3 = prompt("Usuário informe sua idade em anos");

let resul_mes = parseInt(idade3)*12;
let resul_dias = parseInt(idade3)*365;
let resul_horas = parseInt(idade3)*24*365;


console.log("A idade do usuário em", resul_mes,"Meses");
console.log("A idade do usuário em", resul_dias,"Dias");
console.log("A idade do usuário em", resul_horas,"Horas");
/////////////////Fim Exercícios de escrita de código 3°/////////////////////

/////////////////Iício Exercícios de escrita de código 4°///////////////////
alert("#########Vamos a nossa 3° atividade");
//Não consegui 
alert("#########Vamos a nossa 3° atividade");
let num1 = prompt("Usuário informe sua idade em anos");
let num2 = prompt("Usuário informe sua idade em anos");


/*
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

console.log("O primeiro numero é maior que segundo?", num1>num2);
console.log("O primeiro numero é maior que segundo?", num1<num2);
console.log("O primeiro numero é maior que segundo?", num1%num2);
console.log("O primeiro numero é maior que segundo?", num2%num1);

/////////////////Fim Exercícios de escrita de código 4°/////////////////////

