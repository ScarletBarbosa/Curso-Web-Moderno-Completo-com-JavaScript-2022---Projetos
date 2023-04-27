/** Declaração de variaveis 
 * var/let identificador = atribuição-do-identificador
*/

let idade = 28; /** forma mais moderna de declarar variaveis */
const idade2 = 28.1; /** uma constante não possibilita a alteração do seu valor */

/** desafio 1 
 * PI = 3.141592
 * PI * raio * raio
 * raio = 10
*/

let raio = 10;
const pi = 3.141592;

let area = pi * (raio*raio);

console.log("o valor da area e: " + area + " m²");

/** desafio 2
 * let a = 7;
 * let b = 94;
 */

let a = 7;
let b = 94;

let ab = a;
let ba = b;

a = ba;
b = ab;

console.log(a);
console.log(b);

/** solucao alternativa:
 * 
 * [a, b] = [b, a]
 */