//Aula 06: Práticas com condições

let prompt = require("prompt-sync") ()

let preco_sao_paulo = 150.00
let preco_rio_de_janeiro = 450.00
let preco_seguro = 42.50

let total = 0

console.log("Escolha seu destino")
console.log ("1 - São Paulo " + preco_sao_paulo)
console.log ("2  - Rio de Janeiro " + preco_rio_de_janeiro)
let resposta = parseInt(prompt("Digite uma opção: "))

if(resposta == 1){ 
    total = preco_sao_paulo
}else{
    total = preco_rio_de_janeiro
}
let seguro = prompt("Deseja adicionar um seguro por mais de R$ "+ preco_seguro+"? : ")
if(seguro == "sim"){
    total= total+preco_seguro
}

let cupom = prompt ("Digite seu cupom de desconto: ")

if(cupom == "Xavier10"){
    console.log("Cupom de 10% aplicado!")
    let desconto = (total*0.10)
    total = total - desconto
}else{
    console.log("Este cupom não existe...")
}

let promocoes = prompt("Você gostaria de receber promoções no seu e-mail? ")
if(promocoes== "sim"){
    console.log("Obrigado por se registrar, você receberá novos e-mail em breve. ")
} else{
    console.log("ok, você não receberá e-mails de promoções")
}

console.log("Formas de pagamento")
console.log("1 - Cartão de Crédito(acréscimo de 5%)")
console.log("2 - PIX (desconto de 5%)")
resposta = prompt(" Escolha uma opção: ")
if(resposta =="1"){
    total = total * 1.05
    //let acrescimo = total*0.05
   // total = total + acrescimo
}else {
    total + total * 0.95
    // let desconto = total*0.05
    // total = total - desconto
}

console.log("\nO total da viagem é de R$" + total) 





console.log("Obrigado, e volte sempre!")