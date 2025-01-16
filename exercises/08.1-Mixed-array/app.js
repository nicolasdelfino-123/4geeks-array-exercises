let mix = [42, true, "towel", [2, 1], "hello", 34.4, { name: "juan" }];

// Your code here
/* Crea un nuevo arreglo vacío.

Recorre el arreglo original mediante un bucle.

En cada bucle, obtén el tipo de elemento utilizando la función typeof.

Como la función typeof devuelve un string, puedes insertar(push) ese string en el nuevo arreglo.

Cuando finalice el bucle, debes haber encontrado todos los tipos de elementos del arreglo original y haberlos insertado(push) en el nuevo arreglo. */

const newArr = [];

for (let i = 0; i < mix.length; i++) {
  let tipo = typeof mix[i];
  newArr.push(tipo);
}
console.log(newArr);
