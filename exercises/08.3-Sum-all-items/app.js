function sumTheElements(theArray) {
  let total = 0;
  // Your code here
  for (let i = 0; i < theArray.length; i++) {
    let item = theArray[i];
    total += item;
  }
  return total;
}

console.log(sumTheElements([2, 13, 34, 5]));
// El resultado debe ser 54
/* Inicializa una variable total en 0.

Recorre todo el arreglo.

En cada bucle, agrega el valor de cada elemento en la variable total.

Devuelve la variable total (fuera del bucle pero dentro de la función).

Llama la función con un arreglo cualquiera de números que sumados den el resultado esperado de arriba 54. */
