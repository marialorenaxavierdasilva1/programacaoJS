//AULA 04:INPUT
console.log
let prompt = require("prompt-sync") ()
 
let nome = prompt("Olá,digite o seu nome: ")
let sobrenome = prompt ("Digite seu sobrenome:")
let idade = prompt ("Digite sua idade:")
let nome_completo = nome + " " + sobrenome
console.log("Seja bem - vindo(a) " + nome_completo +" você tem "+ idade + " anos ")

console.log("\n\n")

let produto = prompt ("Digite o nome de um produto: ")
let preco_produto1 = prompt ("Digite o preço de" + produto + " R$")
let produto2 = prompt(" Digite o nome de outro produto: ")
let preco_produto2 = prompt ("Digite o preço do produto" +produto2 + "R$")
console.log("------- Relatório--------")
console.log( produto + "- R$"  + preco_produto1)
console.log(produto2 + "- R$" + preco_produto2)