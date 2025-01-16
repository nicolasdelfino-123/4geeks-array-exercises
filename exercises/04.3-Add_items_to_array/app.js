/* 📝 Instrucciones:
Agrega 2 números enteros aleatorios a la lista arr (no necesitas un loop o bucle) e imprime el array en la consola.
💡 Pistas:
Puedes usar las funciones Math.random() y Math.floor() para obtener números aleatorios.

Debes usar la función .push() para agregar los números aleatorios al array. */

let arr = [4, 5, 734, 43, 45];

// Your code here, use the push() function and the 2 Math functions

arr.push(Math.random());
arr.push(Math.floor(Math.random() * 10 + 1));

console.log(arr);
