let prompt = require("prompt-sync") ()

console.log("-------------------------------------------------------")
console.log(" CADASTRO DE PREÇO - XAVIER DOGUEZITOS")
console.log("--------------------------------------------------------")
let produto1 = parseFloat(prompt("Digite o preço do pão: "))
let produto2 = parseFloat(prompt("Digite o preço da salsicha: "))
let produto3 = parseFloat(prompt("Digite o preço do purê de batata: "))
let produto4 = parseFloat(prompt("Digite o preço do queijo: "))
let produto5 = parseFloat(prompt("Digite o preço do bacon: "))
let lucro = parseFloat(prompt("Digite a porcentagem de lucro desejado: ")) 
console.log(lucro)
console.log("--------------------------------------------------------")
console.log("CARDÁPIO XAVIER DOGUEZITO")
console.log("------------------------------------------------------------")
console.log(" O lucro aplicado é: " + lucro + "%")
lucro = lucro / 100 
console.log(" CACHORRO QUENTE COM PURÊ ")
console.log ("Ingredientes: pão, purê de batata, bacon e salsicha")
let ingredientes1 = produto1 + produto2 + produto3 + produto5
console.log("preço de custo: R$" + ingredientes1)
let ingredientes1_lucro = ingredientes1 * lucro + ingredientes1
console.log("O preço de venda é: " + ingredientes1_lucro)

console.log(lucro)
console.log("--------------------------------------------------------")
console.log("CARDÁPIO XAVIER DOGUEZITO")
console.log("---------------------------------------------------------")
console.log(" O lucro aplicado é: "+ lucro + "%" )
lucro = lucro /100
console.log(" CACHORRO QUENTE CREMOSO ")
console.log("Ingredientes: pão, salsichas,queijo")
let ingredientes2 = produto1 + (2*produto2) + produto4
console.log("preço de custo: R$" + ingredientes2)
let ingredientes2_lucro = ingredientes2 * lucro + ingredientes2
console.log("O preço de venda é: R$" + ingredientes2_lucro)

console.log(lucro)
console.log("--------------------------------------------------------")
console.log("CARDÁPIO XAVIER DOGUEZITO")
console.log("---------------------------------------------------------")
console.log(" O lucro aplicado é: "+ lucro + "%" )
lucro = lucro /100
console.log(" CACHORRO QUENTE ESPECIAL")
console.log("Ingredientes:pão,1 salsicha, 1 purê de batata, 1 queijo, 1 bacon ")
let ingredientes3 = produto1 + produto2 + produto3 + produto4 + produto5
console.log("preço de custo: R$"+ ingredientes3)
let ingredientes3_lucro = ingredientes3 * lucro + ingredientes3
console.log("O preço de venda é:" + ingredientes3_lucro)

console.log("-----------------------COMBOS---------------------------------")
console.log(" O lucro aplicado é: "+ lucro + "%" )
lucro = lucro /100
console.log(" CACHORRO QUENTE COM PURÊ ")
console.log(" CACHORRO QUENTE CREMOSO ")
console.log(" CACHORRO QUENTE ESPECIAL")
let ingredientes_tudo = produto1 + produto2 + produto3
console.log(" O preço de custo é R$ " + produto4)
let Ingredientes4_lucro = ingredientes_tudo * lucro + ingredientes_tudo
console.log("O preço de venda é:" + ingredientes_tudo)
