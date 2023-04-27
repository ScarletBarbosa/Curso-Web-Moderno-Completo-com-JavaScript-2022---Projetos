/**
 * Estrutura If (se)
 */

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo(1)
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)