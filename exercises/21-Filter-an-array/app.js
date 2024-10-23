/*  Instrucciones:
Completa el código para que llene el arreglo resultingNames solo con los nombres que comienzan con la letra R.

Usa la función array.filter(). */


let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames = allNames.filter(function(palabra){
    if (palabra[0] === "R")    
        return palabra
});



console.log(resultingNames);
