let arr = [45, 67, 87, 23, 5, 32, 60];

// Your code here
/* Usando un bucle for, invierte el array arr e imprime el nuevo array en la consola. */
let newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);
