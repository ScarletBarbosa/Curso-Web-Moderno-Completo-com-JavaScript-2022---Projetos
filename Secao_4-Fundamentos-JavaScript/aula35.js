/**  Organizacao basica de JS */

console.log("sentança de codigo"); /** isto é uma sentença de cod */

{
    {
        console.log("este é um bloco agrupado")
    } /** bloco 1 */

} /** isto é um bloco de código */

/** Var, Let e Const
 * aula 38
 */

var dado = 10; // var forma mais antiga de declarar
let dado2 = 30; // let forma mais atual de declarar 

const dado3 = 50; // const utilizado para declarar constantes

console.log(dado, dado2, dado3)

/* Evitar nomes genéricos e siglas na declaraçao de var e const
 */

/**
 * aula 40 - number
 */

const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // verifico se 'peso1' é do tipo int

console.log(Number.isInteger(peso2)) // verifica se 'peso1' é do tipo int

const aval1 = 9.874
const aval2 = 6.789

const total = aval1*peso1 + aval2*peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //binario
console.log(typeof media)

/**
 * JS é uma linguagem fracamente tipada
 * (qualquer numero dividido por 0  = infinito)
 * Aula 41
 */

/**
 * Objeto Math em JS
 */

const raio = 5.6
const area = Math.PI * Math.pow(raio) // PI*raio²

console.log(area)

/* Caractere String em JS - Aula 43
 */

const escola = 'cod3r'

console.log(escola.charAt(4)) //mostra a letra da posicao 4 da constante escola

console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 4))

console.log("escola ".concat(escola).concat("!!"))

/* Funcao .replace */

console.log(escola.replace(3,'e')) /* Substitui o valor de um determinado indice */

console.log('Ana,Maria,Pedro') //string

// converter string em um array .split

console.log('Ana,Maria,Pedro'.split(',')) //gera um array

/** Template String 
 * Aula 44
 */

const nome = 'rebeca'
const concatenacao = 'ola' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressoes

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}`)

/* Tipo Boolean
 * aula 45
 */

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')

console.log(!!0)
console.log(!!'' || null || 0 || ' ')


let nome3 = ''

console.log(nome3 || 'Desconhecido')


/* 
 * Tipos em JS: Array - Aula 46
 */

const valores = [7.7, 8.9, 6.3, 9.2] // array

// acessando indices de um array

console.log(valores[0], valores[3])

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores)

console.log(valores.pop()) // deletando valores
delete valores[0]
console.log(valores)

console.log(typeof valores)

/** Tipos em JS: Object - Aula 47 */

const prodi = {}
prodi.nome = "celular ultra mega"
prodi.preco = 5000

//evitar atributos com espaco

console.log(prodi)

const prod2 = {
    nome: 'camida polo',
    preco: 79.90,
    tamanho: 'P'
} // não é json

console.log(prod2)

/**
 * JSON
 * Formato textual de objetos
 */

'{"nome": "Camisa Polo", "preco": 79.90, "tamanho:" "P"}' //isto é um json

/**
 * Aula 48 - Null e Undefined
 **/


