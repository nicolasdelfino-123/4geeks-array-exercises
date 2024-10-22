/*Crea una función deletePerson que "elimine" a 
cualquier persona del arreglo y devuelva un nuevo arreglo sin esa persona.
USANDO FILTER() */

let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(nombre){
    return people.filter(item => item != nombre)
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
