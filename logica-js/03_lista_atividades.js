/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/
console.log(" ____")
console.log("|    |")
console.log("|    |")
console.log("|    |")
console.log("|____|")
/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/
/*
let cidade ="São Carlos" 
let estado ="São Paulo" 

console.log( "eu moro em "+ cidade + " - " + estado)
/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/
/*
let numero1 = 50
let numero2 = 30
let soma = numero1 + numero2

console.log( " A soma dos números aramazenados é " + soma)

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/
/*
 let idade = 18
 let idade2 = idade + 10
console.log(" Olá, você tem "+ idade + " e daqui a 10 anos terá " + idade2 )
/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/
/*
let numero = 15
let multiplicacao = numero * 2
console.log(" o Dobro do numero " + numero + " é " + multiplicacao)
let multiplicacao2= numero * 3
console.log(" O triplo do numero" +numero + " é " + multiplicacao2)
/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/
/*
let produto = "tênis"
let preco1 = 159.00

let produto2 = "blusa"
let preco2 = 39.00
let soma = preco1 + preco2
console.log( "Os dois produtos " + produto + " e " + produto2 + " da o total de: " + soma)

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/
/*
let salario = 3500
console.log(" Seu salario é R$ " + salario)

let aumento = 3500 + 500
salario = salario + aumento
console.log(" Salário com aumento " + aumento)
 
let INSS = 4000-250
salario = salario - INSS
console.log( "Salario com desconto do INSS " + INSS)

/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/
/*
 let mesada = 100
 console.log(" A mesada que João recebe é de R$ " + mesada)
 let gasto =35
 console.log( "O valor que João gastou foi de R$ " + gasto )
 let subtracao = mesada - gasto
 console.log( " O Valor que sobrou para João foi de R$ " + subtracao)

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/
/*
let base = 30
let altura = 10
let multiplicacao = base * altura
console.log( " A área do retângulo é " + multiplicacao)
/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/
/*
 let celsius = 20
 let Fahrenheit = celsius * ("1.8")
 let Fahrenheit2 = Fahrenheit + 32
 console.log(" O valor de Fahrenheit é " + Fahrenheit2 + "°F" )

 let celsius2 = 20
 let kelvin = celsius + 273.15
 console.log ( " O Valor de Kelvin é " + kelvin)

/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/
/*
let hora = 1
let minutos = 1 * 60
console.log("tem " + minutos +" minutos" + " em " + hora + "hora")

let hora2 = 1
let segundos = 60 * 60
console.log (" tem " + segundos + " segundos" + " em " +hora2 + " hora ")
/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

let A = 99
let B = 5
let C = A
A = B
B = C
console.log("O valor de A é: "+A+" e o valor de B é "+B)

/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/
 let distancia_percorrida
 let quantidade_utilizada
 