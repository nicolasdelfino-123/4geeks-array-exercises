/*📝 Instrucciones:
Calcula el valor promedio de todos los elementos del arreglo.
Imprímelo en la consola.
💡 Pistas:
Recuerda utilizar variables auxiliares.
Para obtener el promedio, debes sumar todos los valores y dividir el resultado por la longitud total del arreglo. */

let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here

let total = 0
let items = myArray.length
for(let item of myArray){
    total += item
}

let promedio = total / items

console.log(promedio);