/*Imprime cada número de la iteración en la consola del 20 al 0.

Si el número es un múltiplo de 5, concaténale un signo de exclamación ! al elemento.

Cuando el bucle llegue a cero, imprime LIFTOFF en vez del número 0. 
Esta instrucción debe ir también dentro del bucle. */

let i = 20;

do {
    // Magic goes here
    if (i === 0){
        console.log("LIFTOFF");
    } 
    else if (i % 5 === 0){
        console.log(i + "!");
    }
    else{
        console.log(i)
    }
    i--;
} while (i >= 0);
