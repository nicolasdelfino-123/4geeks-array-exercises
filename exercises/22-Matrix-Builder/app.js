/* Matrix Builder
Reconstruyendo coaliciones en la Matrix

Después de un código malicioso, creado principalmente por el Sr. Smith, 
la matrix tiene un hueco enorme y necesita ayuda para reconstruirse. 
Crea un arreglo/matriz con 0s y 1s aleatorios basado en un parámetro.

📝 Instrucciones:
Crea una función llamada matrixBuilder, que esperará 1 parámetro 
(un entero). Este número representa la cantidad de filas y columnas para la matriz.
Ejemplo: 5 significa que la matriz debe ser 5 x 5.

Esta función debería devolver un arreglo con arreglos que 
representa la matriz. Ejemplo: con 3 como argumento debería devolver: */

// Your code here

function matrixBuilder(n){
    let matriz = [];

    for(let i = 0; i < n; i++){
        let fila = [];

        for(let j = 0; j < n; j++){
            let columna = Math.floor(Math.random() + 0.5 );
            fila.push(columna)
        }
        matriz.push(fila)
    }
    return matriz
}

// Do not change anything from this line down

console.log(matrixBuilder(5))

