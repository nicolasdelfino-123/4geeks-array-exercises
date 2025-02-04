let listOfNumbers = [
  4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68,
];

// Your code here

function mergeTwoList(lista) {
  let odd = [];
  let even = [];
  for (let i = 0; i < lista.length; i++) {
    let item = lista[i];
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }
  let newArray;
  newArray = odd.concat(even);
  return newArray;
}

mergeTwoList(listOfNumbers);

/* Crea una función llamada mergeTwoList que reciba un arreglo de números (enteros).

Recorre el arreglo y separa los números pares e impares en diferentes arreglos.

Si el número es impar, envíalo a un arreglo denominado odd.

Si el número es par, envíalo a un arreglo denominado even.

La función debe retornar un nuevo arreglo que contenga los elementos de ambos arreglos odd y even en ese orden.

Recuerda que el arreglo odd va primero y luego debes agregar los items del arreglo even usando el método .concat(). */
