/* Instrucciones:
Crea una función llamada matrixBuilder, que esperará 1 parámetro (un entero). 
Este número representa la cantidad de filas y columnas para la matriz.
Ejemplo: 5 significa que la matriz debe ser 5 x 5.

Esta función debería devolver un arreglo con arreglos que representa la matriz. 
Ejemplo: con 3 como argumento debería devolver: */


// Your code here

function matrixBuilder(entero){
    let matriz = []
    for(let i = 0; i < entero;i++){
        let fila = []
        
        for(let j = 0; j < entero; j++ ){
            let columna = Math.round(Math.random())
            fila.push(columna)
            
        }
        matriz.push(fila)
    }
    return matriz;
}

// Do not change anything from this line down
console.log(matrixBuilder(5))
