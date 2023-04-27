/**
 * AULA 55 - Var em Loop
 */

for (var i=0; i<10; i++){
    console.log(i)
}

console.log('i =', i)

/**
 * AULA 56 - Let em Loop
 */

for (let i=0; i<10; i++){
    console.log(i)
}

console.log('i =', i) // não imprime pois não está visivel globalmente

/**
 * AULA 57 - Var em Loop
 */

const funcs = []

for (var ii=0; ii<10; ii++){
    funcs.push(function(){
        console.log(ii)
    })
}

funcs[2]()
funcs[8]()

/**
 * AULA 58 - Let em Loop
 */

const funcs2 = []

for (let iii=0; iii<10; iii++){
    funcs2.push(function(){
        console.log(iii)
    })
}

funcs2[2]()
funcs2[8]()