let myArray = [42, true, "towel", [2, 1], "hello", 34.4, { name: "juan" }];

let hello = [];
for (let i = 0; i < myArray.length; i++) {
  let item = myArray[i];
  // MAGIC HAPPENS HERE
  if (typeof item == "object" && !(typeof item == Array.isArray(item))) {
    hello.push(item);
  }
}

console.log(hello);
/* Recorre el array dado con un loop.

Agrega una condición dentro del bucle que verifique que el elemento sea un objeto.

Si el elemento es un objeto, se agrega al arreglo hello.

Usa console.log() para imprimir el array hello en la consola. */
