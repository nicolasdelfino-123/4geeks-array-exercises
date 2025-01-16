let people = [
  "juan",
  "ana",
  "michelle",
  "daniella",
  "stefany",
  "lucy",
  "barak",
  "emilio",
];

// Your code below

function deletePerson(persona) {
  let newArray = people.filter(function (item) {
    return item !== persona;
  });

  return newArray;
}

console.log(deletePerson("daniella"));
console.log(deletePerson("juan"));
console.log(deletePerson("emilio"));

/* Crea una función deletePerson que "elimine" a cualquier persona del arreglo y devuelva un nuevo arreglo sin esa persona. */
