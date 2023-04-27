 /**
 * AULA 69 - Op. Relacionais
 * Novo recurso do ES2015
 */

// confere o valor
console.log(('01'), '1' == 1) //confere a igualdade dos valores
// confere o tipo
console.log(('02'), '1' === 1) 
// confere o valor
console.log(('03'), '3' != 3) 
// confere o valor
console.log(('04'), '3' !== 3)
// confere o valor
console.log(('05'), 3 < 2)
// confere o valor
console.log(('06'), 3 > 2)
// confere o valor
console.log(('07'), 3 <= 2)
// confere o valor
console.log(('08'), 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09', d1 === d2)
console.log('10', d1 == d2)
console.log('11', d1.getTime() === d2.getTime())

 /**
 * AULA 70 - Op. Lógicos
 */

/** TABELA VERDADE
 * 
 * v e v = v
 * v e f = f
 * f e ? = f
 * 
 * v ou ? = v
 * f ou v = v
 * f ou f = f
 * 
 * v xor v = f
 * v xor f = v
 * v xor v = v
 * v xor f = f
 * 
 * !v -> f
 * !f -> v
 * 
 */

function compras(trab1, trab2) {
    const compSorvete = trab1 || trab2
    const compTv50 = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !compSorvete // operador unário

    return { compSorvete, compTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))