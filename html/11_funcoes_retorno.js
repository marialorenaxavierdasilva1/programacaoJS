//Aula 11:Funçoes com retorno

let n1=5
let n2=7

somar(9,5)
somar(0,-9)
somar(132,9182)


//Funçoes com retorno e parâmetros
function somar(n1,n2){
    let soma = n1+n2
    console.log(`Você inseriu o número ${n1} `)
    console.log(`A soma de ${n1} e ${n2} é ${soma}`)
}

//Funçoes vazias (Void)
function somarNumeros(){
    let soma = n1+n2
    console.log(`A soma de ${n1} e ${n2} é ${soma}`)
}

function numeroPositivo(){
    let n1=4
    let resposta =" "
    if(n1>=0){
        resposta ="Positivo"
    }
    console.log(` O número ${n1} é ${resposta}!`)
}

