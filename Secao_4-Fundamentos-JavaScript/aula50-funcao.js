/**
 * AULA 50 - CRIANDO FUNÇÕES EM JS
 */

// Função sem retorno:

function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2,3) // chamando a função com os parametros

// Função com retorno:

function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3)) // substitui o valor padrão de b
console.log(soma(2)) // usa o valor padrão de b = 1

/**
 * AULA 51 - CRIANDO FUNÇÕES EM JS
 * armazenando funcao em variavel
 */

const impSoma = function (a, b){
    console.log(a + b)
} // declara var/const e atribui uma função

impSoma(5,5)

// Armazenando uma função arrow em uma variavel

const soma1 = (a,b) => {
    return a + b
}

console.log(soma1(2,3))

// return implicito - Arrow Function

const subtracao = (a, b) => a - b

console.log(subtracao(2,3))
