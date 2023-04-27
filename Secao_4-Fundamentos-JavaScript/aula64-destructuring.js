 /**
 * AULA 64 - Destructuring
 * Novo recurso do ES2015
 */

 const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 368
    }
 }

// com destructuring

 const { nome, idade } = pessoa
 console.log(nome, idade)

//const { nome: n, idade: 1 } = pessoa
//console.log(n, 1)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

// desestruturando de um array sintaxe:

const [n1, n2, n3, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n2, n3, n6)

// destructuring em função:

function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min)+min
    return Math.floor(valor)
}

const obj = {max:50, min: 40}
console.log(rand(obj))