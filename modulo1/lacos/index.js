/*
 1 Exercícios de interpretação de código

 let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 
====> Nesse código a variavel repercorrer até o numero 5 e no final ira receber o valor + 

valor de valor é  0 valor valor de I é 0
valor de valor é  1 valor valor de I é 1
valor de valor é  3 valor valor de I é 2
valor de valor é  6 valor valor de I é 3
valor de valor é  10 valor valor de I é 4


2 Exercícios de interpretação de código

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
a) O que vai ser impresso no console?
==> Serão impresso no console apenas os números maiores que 18

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
==> sim, 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
console.log(lista[4 -1])
}

3 Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

irá percorrer um array usando for repetidas vezes do 0 até 4 unidades de *(asteriscos) 

*/