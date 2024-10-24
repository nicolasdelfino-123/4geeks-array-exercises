/*Crea un nuevo arreglo vacío.
Recorre el arreglo original mediante un bucle.
En cada bucle, obtén el tipo de elemento utilizando la función typeof.
Como la función typeof devuelve un string, puedes insertar(push) ese string en el nuevo arreglo.
Cuando finalice el bucle, debes haber encontrado todos los tipos de elementos del arreglo original 
y haberlos insertado(push) en el nuevo arreglo. */

let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here

let newArray = [];

for(let i = 0; i < mix.length; i++){
    let item = mix[i]
    newArray.push(typeof item)
}
console.log(newArray);