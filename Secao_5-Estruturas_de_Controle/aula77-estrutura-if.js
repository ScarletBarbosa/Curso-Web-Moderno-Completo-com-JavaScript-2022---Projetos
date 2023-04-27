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

function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); // 1ª sentença de código
    {
        console.log(num)
    } // 2ª sentença de código * bloco
}

teste2(6)
teste2(8)

// os 2 valores são impressos pois o 1 bloco de codigo este vazio, sem nenhuma condição