let mySampleArray = [
  "Esmeralda",
  "Kiko",
  "Ruth",
  "Lebron",
  "Pedro",
  "Maria",
  "Lou",
  "Fernando",
  "Cesco",
  "Bart",
  "Annie",
];

// Your code here
/* Sin usar el método reverse(), invierte el bucle (desde el final hasta el principio) todo el array e imprime todos los elementos en la consola a medida que lo recorre. */

for (let i = mySampleArray.length - 1; i >= 0; i--) {
  console.log(mySampleArray[i]);
}
