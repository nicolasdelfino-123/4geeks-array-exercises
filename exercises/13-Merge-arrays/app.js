let chunkOne = [
  "Lebron",
  "Aaliyah",
  "Diamond",
  "Dominique",
  "Aliyah",
  "Jazmin",
  "Darnell",
];
let chunkTwo = ["Lucas", "Jake", "Scott", "Amy", "Molly", "Hannah", "Lucas"];

const mergeArrays = (firstArray, secondArray) => {
  let newArray = [];
  // Your code here
  newArray = [...firstArray, ...secondArray];
  return newArray;
};

console.log(mergeArrays(chunkOne, chunkTwo));

/* Escribe una función que combine dos arrays y retorne un único array nuevo, con todos los elementos de ambos arrays.
Asegúrate de no crear un array con 2 arrays anidados. Debe ser un solo array con todos los nombres en su orden original. */
