/**
 * AULA 60 - Funcao x Objeto
 */

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}

console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

/**
 * AULA 61 - Par Nome/Valor
 */

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = "Falaaa" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares/valor

const cliente = {
    nome: 'Scarlet',
    idade: 28,
    peso: 57.7,
    endereço: {
        logradouro: 'Comendador Macedo',
        numero: 365
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

 /**
 * AULA 62 - Notacao Ponto
 */

