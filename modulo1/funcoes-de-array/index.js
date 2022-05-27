/* function testeImpar(num,bloco2){
    if (num%2 !==0){
        bloco2()
    }
}

function imprimir(){
    console.log("Sim, é impar");
}

testeImpar(13,imprimir) */

/* function calculadora(n1,n2,callback){
    console.log (callback(n1,n2));
}

function soma(n1,n2){
    //return window.open("https://www.w3schools.com");
    return n1+n2
}

function subtrair(n1,n2){
    return n1-n2
}

function multiplicar(n1,n2){
    return n1*n2
}

calculadora(3,5,multiplicar) */
/* let numeros=[1,2,3,4,5,6,7,8]
//função callback
function dobro(valor){
    return 2*valor
}
let numerosDobrados=numeros.map(dobro)

console.log(numerosDobrados); */

/* let numeros=[1,2,3,4,5,6,7,8,"palavras","João"]
//calback ---> function mensagem(valorAtual, indece, array)
function mensagem(valorAtual,indece){
return `O elemento ${indece} é ${valorAtual}`
}
let resultante=numeros.map(mensagem)
console.log(resultante); */

/* const listaCarros =[
    {id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
    {id: 2, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
    {id: 3, modelo: 'Montana', marca: 'Chevrolet', preco: 18.000},
    {id: 4, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
    {id: 5, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
    {id: 6, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
    {id: 7, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
    {id: 8, modelo: 'Palio', marca: 'Fiat', preco: 20.000}
]

function selecionaCarro(carro){
    return carro.marca==='Fiat'
}
let carrosSelecionados=listaCarros.filter(selecionaCarro)
console.log(carrosSelecionados); */

/* const produtos =[
    {nome: "alface lavada", categoria: "Hortifruti", preco:2.5},
    {nome: "Ameba", categoria: "Undefull", preco:2.5},
    {nome: "alface lavada", categoria: "Hortifruti", preco:2.5},
    {nome: "alface lavada", categoria: "Hortifruti", preco:2.5},
    {nome: "Cuscuz", categoria: "Undefull", preco:2.5},
    {nome: "Café com leite", categoria: "Composto", preco:2.5}
]

function filtrarPorCategoria(produto){
    return produto.categoria==="Hortifruti"
}
function newLoc(porCategoria){
    return porCategoria.categoria==="Undefull"
}
function newLoc2(porCategoria2){
    return porCategoria2.categoria==="Composto"
}

let produtosLimpeza = produtos.filter(filtrarPorCategoria)
let pfilterPorCategoria = produtos.filter(newLoc)
let filterPorCategoria2 = produtos.filter(newLoc2)
console.log(filterPorCategoria2) */

/*
1 interpretação de código

a) O que vai ser impresso no console?
   R==>
  O parâmetro valorAtual é obrigatório e representa o próprio item da iteração
atual. Ou seja, à medida que a função map itera sobre o array, esse parâmetro
receberá cada item.
● O parâmetro indice é opcional e representa o índice do item da iteração atual.
● O parâmetro aray também é opcional e representa o próprio array ao qual os
itens pertencem. 

2
a) O que vai ser impresso no console?
Será impresso o apenas os nomes das pessoas


3
a) O que vai ser impresso no console?
tudo que for diferente da string "Chijo"
*/
// Exercícios de escrita de código
/*  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}
  ] */
  ////////////////A
/*   const novoArrayB = pets.map((item) => {
     return item.nome
  })
  
  console.log(novoArrayB) 
////////////////B
function apenasSalsicha(soDaSal){
    return soDaSal.raca ==="Salsicha"
}

let relSoSal = pets.filter(apenasSalsicha)
console.log(relSoSal) */
////////////////C

/* const poodle = pets.filter((one)=>{
    return one.raca ==="Poodle"
})
const imprimircupom =poodle.map((one)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${one.nome}`
})
console.log(imprimircupom) */
///////2
//A)
/* const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const soNomes = produtos.map((nomesS) => {
    return nomesS.nome
 })
 console.log(soNomes) */