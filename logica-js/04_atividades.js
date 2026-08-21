let prompt = require("prompt-sync") ()
console.log

let ano_nascimento = parseInt(prompt ( "Digite seu ano de nascimento"))
let ano_atual = parseInt(prompt  (" Digite em que ano estamos "))
let idade =  ano_atual - ano_nascimento
console.log( "A Ana tem " + idade + " anos de idade ")

 let nota = parseFloat(prompt("Digite sua primeira nota"))
 let nota2 = parseFloat(prompt("Digite sua segunda nota"))
 let nota3 = parseFloat(prompt("Digite sua terceira nota"))
 let média = (nota + nota2 + nota3)/3
 console.log(" A média escolar de Lorena é :" + média)

 let produto = prompt(" Digite o nome do produto ")
let quantidade_produto = parseInt(prompt(" Digite a quantidade do produto"))
let preco = parseFloat(prompt(" Digite o preço do produto "))
let quantidade_estoque = ( quantidade_produto * preco)
console.log = ("O usuario vai faturar: " + quantidade_estoque )
