/**
 * Estrutura break/continue
 * Desvio de fluxo
 */

const nuns = [1,2,3,4,5,6,7,8,9,10]

for (x in nuns) {
    if (x == 5) {
        break
    }
    console.log(`x = ${nuns[x]}`)
}

for (y in nuns) {
    if (y == 5) {
        continue
    } // pula o 5º indice e continua pro próximo indice
    console.log(`${y} = ${nuns[y]}`)
}

externo: for (a in nuns) {
    for (b in nuns) {
        if (a == 2 && b ==3) break externo
        console.log(`Par = ${a},${b}`)
    }
}