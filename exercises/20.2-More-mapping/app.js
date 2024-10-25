/*Instrucciones:
Crea una función llamada myFunction que multiplique cada número por 3.
Usa el método array.map() para ejecutar la función myFunction a través de cada valor en el arreglo.
Almacena el nuevo arreglo en una variable llamada newArray y luego imprime el nuevo arreglo con console.log().
💡 Pistas:
La función tomará un parámetro con el elemento original que se transforma y se agrega en el nuevo arreglo.
Recuerda que tu función debe devolver cada uno de los nuevos elementos que se almacenarán en el nuevo arreglo. */

let myNumbers = [23,234,345,4356234,243,43,56,2];

// Your code here

function myFunction(number){
    return number * 3
}

let newArray = myNumbers.map(myFunction);
console.log(newArray)