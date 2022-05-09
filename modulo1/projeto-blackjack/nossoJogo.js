/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let pessoa ={
   nome: "humano",
   pontos: 0
}
let computador ={
   nome: "comp",
   pontos: 0
}
let jogadorHumano = prompt("Olá Humano: Bem vindo, digite seu nome")
function nomeJogador(){
   if (jogadorHumano ===""){
      alert("##Digita esse nome logo")
   }else{
      alert("Vamos começar Loading...")
   }
}
nomeJogador()
comprarCarta()



