//  1. Negativo ou positivo
// Crie um programa que peça dois números para o usuário e, em seguida, responda se o número digitado é positivo ou negativo

let prompt = require("prompt-sync") ()

// let number = prompt("Digite um número:")
// if(number <= 0){
//     console.log("O numero é negativo")
// } else{
//     console.log(" O número é positivo")
// }

// ## 2. O maior número
// Crie um programa que peça dois números para o usuário e, em seguida, mostre na tela qual é o maior número

// let number = prompt (" Digite o primeiro número:")
// let number1 = prompt ("Digite o segundo número: ")
// if(number > number1){
//     console.log("O primeiro número é maior")
// } else{
//     console.log(" O segundo número é maior")
// }

//  3. IMC
// Crie um programa que peça a altura e o peso do usuário e, usando o cálculo do IMC, exiba se a pessoa está com seu peso ideal ou se está com sobrepeso.

// let peso = parseFloat(prompt(" Digite seu peso(KG)"))
// let altura = parseFloat(prompt (" Digite sua altura(M)"))
// let imc = peso/(altura*altura);
// if(imc <25 ){
//     console.log(" você está no peso ideal")
// }else{ 
//     console.log(" você está com sobrepeso")
// }

// ## 4. João Papo-de-Pescador
// João Papo-de-Pescador, homem de bem, contratou um sistema para controlar o rendimento diário de
// seu trabalho.

// Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (**50 quilos**) deve pagar uma multa de `R$ 4,25` por quilo
// excedente.

// João precisa que você faça um programa que
// - Leia a variável de peso dos peixes pescados e calcule o excesso
// - Grave na variável excesso a quantidade de quilos além do limite
// - Grave na variável multa o valor da multa que João deverá pagar

let peso_Peixes = prompt("Digite o peso do peixe")
let multa = 4.25
let calculo = (peso_peixes*multa)
if(calculo>=50)

// ## 5. Time Vencedor
// Faça um programa para ler o nome de 2 times de futebol e o número de gols marcados na partida
// (para cada time).
// - Escreva na tela o nome do vencedor.
//     - Caso não haja vencedor deverá ser impressa a palavra EMPATE

let time_A = prompt ("Digite o primeiro time de futebol: ")
let gol_A = parseInt(prompt("Digite a quantidade de gols que esse time fez: "))
let time_B = prompt ("Digite o segundo time de futebol:  ")
let gol_B = parseInt(prompt("Digite a quantidade de gols que esse time fez:"))
if(gol_A > gol_B){
    console.log("O vencedor é o time: " + time_A )
    
}
if(gol_B > gol_A){
    console.log("O vencedor é o time:" + time_B)
}
if(gol_A==gol_B){
    console.log("EMPATE")
} 

    
