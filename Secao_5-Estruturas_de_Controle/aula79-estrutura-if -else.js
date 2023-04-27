/**
 * Estrutura If (se)
 */

const impResultado = function(nota) {
    if(nota >= 7) {
        console.log('Você está APROVADO!')
    } else {
        console.log('Você REPROVOU')
    }
}

impResultado(7.1)
impResultado(4.1)