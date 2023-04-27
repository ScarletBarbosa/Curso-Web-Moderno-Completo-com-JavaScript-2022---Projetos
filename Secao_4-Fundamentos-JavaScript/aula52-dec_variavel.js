/**
 * AULA 52 - DECLARACAO DE VARIAVEL
 */

{ // bloco #1
    { // bloco #2
        { // bloco #3
            { // bloco #4
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

// o var é visivel dentro e fora do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()

/**
 * Variaveis possuem 2 escopos possíces:
 * 1 - Global (Visivel para todos)
 * 2 - Funcao (Visivel apenas dentro da function)
 */

// uso 1

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

// uso 2

var numero1 = 1
{
    let numero1 = 2
    console.log('dentro =', numero1) // retorna o valor de let apenas
}

console.log('fora =', numero1) // retorna o valor de var

