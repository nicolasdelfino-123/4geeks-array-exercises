/*📝 Instrucciones:
Usa el método filter() para imprimir en consola todas las tareas hechas (done: true) del arreglo tasks.
💻 Resultado esperado:
[
  { label: 'Eat my lunch', done: true },
  { label: 'Finish my exercises', done: true },
  { label: 'Read a book', done: true }
] */

let tasks = [
  { label: "Eat my lunch", done: true },
  { label: "Make the bed", done: false },
  { label: "Have some fun", done: false },
  { label: "Finish the replits", done: false },
  { label: "Finish my exercises", done: true },
  { label: "Ask for a raise", done: false },
  { label: "Read a book", done: true },
  { label: "Make a trip", done: false },
];

// Your code here

let newArray = tasks.filter(function(valor){
  if(valor.done === true){
    return valor
  }
});

console.log(newArray);